import { httpExternal } from "@/lib/http";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    console.log(req.headers);
    const cookieStore = cookies();
    const token = cookieStore.get("test-cookie");
    console.log(token);
    const { data } = await httpExternal.get<{
      message: string;
    }>("/auth/getcookie", {
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        cookie: "test-cookie=wow",
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ ok: "something went wrong" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    console.log(req.headers);
    //   const cookieStore = cookies();
    //   const token = cookieStore.get("test-cookie");
    //   console.log(token);
    //   const { data } = await httpExternal.get<{
    //     message: string;
    //   }>("/auth/getcookie", {
    //     withCredentials: true,
    //     headers: {
    //       "Content-type": "application/json",
    //       cookie: "test-cookie=wow",
    //     },
    //   });
    return NextResponse.json({ message: "fail" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ ok: "something went wrong" }, { status: 500 });
  }
}
