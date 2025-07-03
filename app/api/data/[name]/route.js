import { NextResponse } from 'next/server';

const BASE = process.env.DATA_BASE_URL || 'https://raw.githubusercontent.com/ucdigital/ubicate-uc-data/main';

export async function GET(req, { params }) {
  const { name } = params;
  try {
    const res = await fetch(`${BASE}/${name}.json`);
    if (!res.ok) throw new Error('fetch error');
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to load' }, { status: 500 });
  }
}
