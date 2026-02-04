// notifications helpers for tutoring session scheduler for after-school programs

export function notificationsStep0(records, limit = 314) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep1(records, limit = 260) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep2(records, limit = 130) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep3(records, limit = 255) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep4(records, limit = 392) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep5(records, limit = 80) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep6(records, limit = 439) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep7(records, limit = 329) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep8(records, limit = 417) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep9(records, limit = 161) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
