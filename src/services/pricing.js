// pricing helpers for tutoring session scheduler for after-school programs

export function pricingStep0(records, limit = 335) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep1(records, limit = 480) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep2(records, limit = 178) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep3(records, limit = 183) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep4(records, limit = 291) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep5(records, limit = 70) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep6(records, limit = 492) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep7(records, limit = 328) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep8(records, limit = 482) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function pricingStep9(records, limit = 384) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('pricing step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
