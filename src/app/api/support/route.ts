import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Minimal validation
    const ticket = {
      id: `TICKET-${Math.random().toString(36).slice(2,9).toUpperCase()}`,
      name: body.name || 'Anonymous',
      email: body.email || null,
      product: body.product || null,
      subject: body.subject || '(no subject)',
      description: body.description || '',
      createdAt: new Date().toISOString(),
    };

    // In a real app we would persist the ticket to a DB or ticketing system.
    // For now return the ticket object as confirmation.
    return NextResponse.json({ ok: true, ticket }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
