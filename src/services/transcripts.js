// transcripts helpers for tutoring session scheduler for after-school programs

export function transcriptsStep0(records, limit = 442) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep1(records, limit = 372) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep2(records, limit = 288) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep3(records, limit = 129) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep4(records, limit = 235) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep5(records, limit = 322) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep6(records, limit = 115) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep7(records, limit = 103) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep8(records, limit = 140) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep9(records, limit = 442) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
