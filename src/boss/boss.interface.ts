export interface Boss {
  name: BossTypes;
  icon: string;
}

export const REKSAI = `Rek'Sai`;
export const BRIAR = 'Briar';
export const BELVETH = `Bel'Veth`;
export const AATROX = 'Aatrox';

export const BOSSES = [REKSAI, BRIAR, BELVETH, AATROX] as const;

export type BossTypes = (typeof BOSSES)[number];
