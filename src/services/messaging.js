// messaging helpers for tutoring session scheduler for after-school programs

export function messagingStep0(records, limit = 186) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep1(records, limit = 138) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep2(records, limit = 221) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep3(records, limit = 19) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep4(records, limit = 327) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function messagingStep5(records, limit = 486) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('messaging step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
