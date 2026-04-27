import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

// Insert a contact / enquiry / catering request.
// When Supabase isn't configured we still resolve "successfully" so the UI
// can confirm; the payload is logged for the team to wire up later.

export async function submitEnquiry(payload) {
  const record = {
    name: payload.name?.trim(),
    phone: payload.phone?.trim(),
    email: payload.email?.trim() || null,
    message: payload.message?.trim() || null,
    occasion: payload.occasion || 'general',
    source: 'web',
    created_at: new Date().toISOString(),
  };

  if (!record.name || !record.phone) {
    throw new Error('Name and phone are required.');
  }

  if (!isSupabaseConfigured) {
    console.info('[enquiries] Supabase not configured — payload:', record);
    await new Promise((r) => setTimeout(r, 600));
    return { ok: true, mock: true };
  }

  const { error } = await supabase.from('enquiries').insert(record);
  if (error) throw new Error(error.message);
  return { ok: true };
}
