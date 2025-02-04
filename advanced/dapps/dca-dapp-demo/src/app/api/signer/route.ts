import { NextResponse } from "next/server";
import { privateKeyToAccount } from "viem/accounts";

export function GET() {
  try {
    const APPLICATION_PRIVATE_KEY = process.env
      .NEXT_PUBLIC_APPLICATION_PRIVATE_KEY as `0x${string}`;
    const account = privateKeyToAccount(APPLICATION_PRIVATE_KEY);

    return NextResponse.json({ key: account.publicKey });
  } catch (e) {
    console.warn("Error getting signer:", e);

    return NextResponse.json(
      { message: "Error getting signer", error: (e as Error).message },
      { status: 500 },
    );
  }
}
