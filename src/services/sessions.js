// sessions helpers for tutoring session scheduler for after-school programs

export function sessionsStep0(records, limit = 316) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep1(records, limit = 20) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep2(records, limit = 176) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep3(records, limit = 199) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep4(records, limit = 312) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep5(records, limit = 159) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep6(records, limit = 16) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function sessionsStep7(records, limit = 210) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('sessions step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
