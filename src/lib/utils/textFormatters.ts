export function formatLocationCoverage(city: string | undefined, areas: string[]): string {
    const safeCity = city?.trim() || 'your area';

    if (!areas || areas.length === 0) {
        return `Local Locksmith in ${safeCity} and surrounding areas.`;
    }

    if (areas.length === 1) {
        return `Local Locksmith in ${safeCity}, covering ${areas[0]} and surrounding areas.`;
    }

    const last = areas[areas.length - 1];
    const rest = areas.slice(0, -1).join(', ');

    return `Local Locksmith in ${safeCity}, covering multiple areas like ${rest} and ${last}.`;
}

export function formatFAQCoverage(city: string | undefined, areas: string[]): string {
  const safeCity = city?.trim() || 'your area';

  if (!areas || areas.length === 0) {
    return `We serve all of ${safeCity} and surrounding regions.`;
  }

  if (areas.length === 1) {
    return `We serve all of ${safeCity}, including ${areas[0]}.`;
  }

  const last = areas[areas.length - 1];
  const rest = areas.slice(0, -1).join(', ');
  return `We serve all of ${safeCity}, including ${rest} and ${last}.`;
}
