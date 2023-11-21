import { httpExternal } from "@/lib/http";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { data } = await httpExternal.get(`/posts/${params.slug}`);
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.log(error.response.data);
    return NextResponse.json({ ok: "something went wrong" }, { status: 500 });
  }
}
