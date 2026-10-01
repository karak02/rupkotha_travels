#!/usr/bin/env node

const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} = require("@modelcontextprotocol/sdk/types.js");
require("dotenv").config();

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || "appNdEGzWTKGjCANY";
const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID || "tblZ70ZN2xuWWgdcu";

if (!AIRTABLE_API_KEY) {
  console.error("Warning: AIRTABLE_API_KEY environment variable is not set.");
}

const BASE_URL = "https://api.airtable.com/v0";

async function airtableFetch(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Airtable API error (${response.status}): ${errorText}`);
  }

  return response.json();
}

const server = new Server(
  {
    name: "airtable-rupkotha-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Define tool schemas
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "create_inquiry",
        description:
          "Create a new travel booking or lead inquiry in Rupkotha Travels Airtable table",
        inputSchema: {
          type: "object",
          properties: {
            name: { type: "string", description: "Full name of the traveler/inquirer" },
            phone: { type: "string", description: "Contact mobile or WhatsApp number" },
            email: { type: "string", description: "Email address" },
            packageOrDestination: {
              type: "string",
              description: "Tour package title or preferred destination",
            },
            formType: {
              type: "string",
              enum: [
                "Booking Page",
                "Lounge Inquiry",
                "Tour Modal Inquiry",
                "Custom Circuit",
              ],
              description: "Source form name",
            },
            travelDate: {
              type: "string",
              description: "Preferred departure date or month (e.g. '21 Dec 2026')",
            },
            adults: { type: "number", description: "Number of adults (default 2)" },
            children: { type: "number", description: "Number of children (default 0)" },
            childrenAges: {
              type: "string",
              description: "Ages of children (e.g. '1 Child (Age 7)')",
            },
            extraPersons: { type: "number", description: "Number of extra persons" },
            roomSharing: {
              type: "string",
              enum: ["Twin Sharing", "Triple Sharing", "Single Occupancy"],
              description: "Room occupancy choice",
            },
            mealChoice: {
              type: "string",
              enum: ["Standard (Veg & Non-Veg)", "Strict Vegetarian"],
              description: "Meal plan preference",
            },
            addons: {
              type: "array",
              items: {
                type: "string",
                enum: [
                  "AC Train Sleeper",
                  "Flight Booking",
                  "Private Exclusive Car",
                  "AC Room Upgrade",
                ],
              },
              description: "List of requested travel addons",
            },
            estimatedTotal: {
              type: "number",
              description: "Estimated total quotation in INR",
            },
            status: {
              type: "string",
              enum: [
                "New Lead",
                "Contacted",
                "Proposal Sent",
                "Confirmed",
                "Cancelled",
              ],
              description: "Status of the lead (defaults to 'New Lead')",
            },
            notes: {
              type: "string",
              description: "Additional requests, notes, or special requirements",
            },
          },
          required: ["name", "phone"],
        },
      },
      {
        name: "list_inquiries",
        description: "List recent inquiries/leads from Rupkotha Travels Airtable with optional filter",
        inputSchema: {
          type: "object",
          properties: {
            maxRecords: {
              type: "number",
              description: "Maximum number of records to return (default 20, max 100)",
            },
            filterByFormula: {
              type: "string",
              description: "Airtable formula string (e.g. \"{Status}='New Lead'\")",
            },
            view: {
              type: "string",
              description: "View name (e.g. 'Grid view')",
            },
          },
        },
      },
      {
        name: "get_inquiry",
        description: "Get details of a specific inquiry by Airtable record ID",
        inputSchema: {
          type: "object",
          properties: {
            recordId: {
              type: "string",
              description: "Airtable record ID (e.g. 'recXXXXXXXXXXXXXX')",
            },
          },
          required: ["recordId"],
        },
      },
      {
        name: "update_inquiry_status",
        description: "Update the status or notes of an existing inquiry in Airtable",
        inputSchema: {
          type: "object",
          properties: {
            recordId: {
              type: "string",
              description: "Airtable record ID",
            },
            status: {
              type: "string",
              enum: [
                "New Lead",
                "Contacted",
                "Proposal Sent",
                "Confirmed",
                "Cancelled",
              ],
              description: "New status",
            },
            notes: {
              type: "string",
              description: "Appended or updated notes",
            },
          },
          required: ["recordId"],
        },
      },
      {
        name: "get_table_schema",
        description: "Inspect the schema and fields of the Rupkotha Travels Airtable table",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ],
  };
});

// Handle tool executions
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "create_inquiry": {
        const fields = {};
        if (args.name) fields["Name"] = args.name;
        if (args.phone) fields["Phone"] = args.phone;
        if (args.email) fields["Email"] = args.email;
        if (args.packageOrDestination)
          fields["Package / Destination"] = args.packageOrDestination;
        if (args.formType) fields["Form Type"] = args.formType;
        if (args.travelDate) fields["Travel Date"] = args.travelDate;
        if (args.adults !== undefined) fields["Adults"] = Number(args.adults);
        if (args.children !== undefined) fields["Children"] = Number(args.children);
        if (args.childrenAges) fields["Children Ages"] = args.childrenAges;
        if (args.extraPersons !== undefined)
          fields["Extra Persons"] = Number(args.extraPersons);
        if (args.roomSharing) fields["Room Sharing"] = args.roomSharing;
        if (args.mealChoice) fields["Meal Choice"] = args.mealChoice;
        if (args.addons && Array.isArray(args.addons) && args.addons.length > 0)
          fields["Addons"] = args.addons;
        if (args.estimatedTotal !== undefined)
          fields["Estimated Total"] = Number(args.estimatedTotal);
        fields["Status"] = args.status || "New Lead";
        if (args.notes) fields["Notes"] = args.notes;

        const result = await airtableFetch(
          `/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
          {
            method: "POST",
            body: JSON.stringify({
              fields,
              typecast: true,
            }),
          }
        );

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  success: true,
                  message: `Inquiry successfully created in Airtable with ID ${result.id}`,
                  record: result,
                },
                null,
                2
              ),
            },
          ],
        };
      }

      case "list_inquiries": {
        const params = new URLSearchParams();
        if (args?.maxRecords) params.set("maxRecords", String(args.maxRecords));
        if (args?.filterByFormula)
          params.set("filterByFormula", args.filterByFormula);
        if (args?.view) params.set("view", args.view);

        const queryStr = params.toString() ? `?${params.toString()}` : "";
        const result = await airtableFetch(
          `/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}${queryStr}`
        );

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "get_inquiry": {
        const result = await airtableFetch(
          `/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}/${args.recordId}`
        );

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "update_inquiry_status": {
        const fields = {};
        if (args.status) fields["Status"] = args.status;
        if (args.notes) fields["Notes"] = args.notes;

        const result = await airtableFetch(
          `/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}/${args.recordId}`,
          {
            method: "PATCH",
            body: JSON.stringify({
              fields,
              typecast: true,
            }),
          }
        );

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  success: true,
                  message: `Inquiry ${args.recordId} updated successfully`,
                  record: result,
                },
                null,
                2
              ),
            },
          ],
        };
      }

      case "get_table_schema": {
        const result = await airtableFetch(
          `/meta/bases/${AIRTABLE_BASE_ID}/tables`
        );
        const currentTable = result.tables?.find(
          (t) => t.id === AIRTABLE_TABLE_ID || t.name === "Table 1"
        );

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(currentTable || result, null, 2),
            },
          ],
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: `Error: ${error.message}`,
        },
      ],
    };
  }
});

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Rupkotha Travels Airtable MCP server running on stdio");
}

run().catch((error) => {
  console.error("Fatal error running Airtable MCP server:", error);
  process.exit(1);
});
