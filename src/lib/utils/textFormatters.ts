export function formatLocationCoverage(city: string | undefined, areas: string[]): string {
    const safeCity = city?.trim() || 'your area';

    if (!areas || areas.length === 0) {
        return `Based in ${safeCity} and all surrounding areas. <br><br> Wherever you are in or around ${safeCity}, we aim to reach you in <strong style="color: #FDD835;">under 30 minutes — fast and reliable, your emergency is our priority.</strong>`;
    }

    if (areas.length === 1) {
        return `Based in ${safeCity}, we cover ${areas[0]} and all surrounding areas.<br><br> Wherever you are in or around ${safeCity}, we aim to reach you in <strong style="color: #FDD835;">under 30 minutes — fast and reliable, your emergency is our priority.</strong>`;
    }

    const formattedAreas = areas.join(', ');

    return `Based in ${safeCity}, we cover ${formattedAreas} and all surrounding areas.<br><br> Wherever you are in or around ${safeCity}, we aim to reach you in <strong style="color: #FDD835;">under 30 minutes — fast and reliable, your emergency is our priority.</strong>`;
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
