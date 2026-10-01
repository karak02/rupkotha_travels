import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID || "appNdEGzWTKGjCANY";
    const tableId = process.env.AIRTABLE_TABLE_ID || "tblZ70ZN2xuWWgdcu";

    if (!apiKey) {
      return NextResponse.json(
        { error: "AIRTABLE_API_KEY environment variable is not configured." },
        { status: 500 }
      );
    }

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: "Name and Phone are required fields." },
        { status: 400 }
      );
    }

    const fields: Record<string, any> = {
      Name: body.name,
      Phone: body.phone,
      Status: body.status || "New Lead",
    };

    if (body.email) fields["Email"] = body.email;
    if (body.packageOrDestination || body.selectedPackage || body.destination) {
      fields["Package / Destination"] =
        body.packageOrDestination || body.selectedPackage || body.destination;
    }
    if (body.formType) fields["Form Type"] = body.formType;
    if (body.travelDate) fields["Travel Date"] = body.travelDate;
    if (body.adults !== undefined && body.adults !== null) {
      fields["Adults"] = Number(body.adults);
    }
    if (body.children !== undefined && body.children !== null) {
      fields["Children"] = Number(body.children);
    }
    if (body.childrenAges) fields["Children Ages"] = body.childrenAges;
    if (body.extraPersons !== undefined && body.extraPersons !== null) {
      fields["Extra Persons"] = Number(body.extraPersons);
    }
    if (body.roomSharing) fields["Room Sharing"] = body.roomSharing;
    if (body.mealChoice) fields["Meal Choice"] = body.mealChoice;

    if (Array.isArray(body.addons) && body.addons.length > 0) {
      fields["Addons"] = body.addons;
    }

    if (body.estimatedTotal !== undefined && body.estimatedTotal !== null) {
      fields["Estimated Total"] = Number(body.estimatedTotal);
    }

    if (body.notes) fields["Notes"] = body.notes;

    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields,
          typecast: true,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Airtable API error:", errorData);
      return NextResponse.json(
        { error: "Failed to store record in Airtable", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({
      success: true,
      id: data.id,
      message: "Inquiry saved to Airtable successfully",
    });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal Server Error", message: err.message },
      { status: 500 }
    );
  }
}
