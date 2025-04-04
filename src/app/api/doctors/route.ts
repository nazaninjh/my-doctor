
import { NextResponse } from 'next/server';
import pool from '@/lib/db'; 

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM doctors ORDER BY id ASC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 });
  }
}
