const unsplash = (id, width = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;

const pexels = (id, width = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

export const images = {
  hero: unsplash('1586023492125-27b2c045efd7', 1400),
  heroAlt: unsplash('1600210492486-724fe5c67fb0', 1400),
  consultation: unsplash('1600607687939-ce8a6c25118c', 1600),
  contact: unsplash('1616486338812-3dadae4b4ace', 1200),

  projects: {
    villa: unsplash('1600596542815-ffad4c1539a9', 1000),
    penthouse: unsplash('1600210492486-724fe5c67fb0', 1000),
    office: unsplash('1497366216548-37526070297c', 1000),
    hotel: unsplash('1571896349842-33c89424de2d', 1000),
  },

  beforeAfter: {
    before: unsplash('1560185007-cde436f6a4d0', 1000),
    after: unsplash('1616486338812-3dadae4b4ace', 1000),
  },

  gallery: {
    livingRoom: unsplash('1586023492125-27b2c045efd7', 800),
    bedroom: unsplash('1616594039964-ae9021a400a0', 800),
    kitchen: unsplash('1556911220-bff31c812dba', 800),
    office: unsplash('1497366216548-37526070297c', 800),
    villa: unsplash('1600585154340-be6161a56a0c', 800),
    dining: unsplash('1617806118233-18e1de247200', 800),
    bathroom: unsplash('1552321554-5fefe8c9ef14', 800),
    lounge: unsplash('1615529328331-f8917597711f', 800),
    terrace: unsplash('1600566753190-17f0baa2a6c3', 800),
  },

  materials: {
    marble: pexels(1571460, 600),
    wood: pexels(1571453, 600),
    stone: unsplash('1600607687920-4e2a09cf159d', 600),
    fabric: unsplash('1616486338812-3dadae4b4ace', 600),
    metal: pexels(276724, 600),
  },

  designers: {
    elena: unsplash('1594824476967-48c8b964273f', 600),
    marcus: unsplash('1507003211169-0a1dd7228f2d', 600),
    sofia: unsplash('1573496359142-b8d87734a5a2', 600),
    james: unsplash('1472099645785-5658abf4ff4e', 600),
  },

  testimonials: {
    client1: unsplash('1438761681033-6461ffad8d80', 400),
    client2: unsplash('1500648767791-00dcc994a43e', 400),
    client3: unsplash('1544005313-94ddf0286df2', 400),
    client4: unsplash('1534528741775-53994a69daeb', 400),
    client5: unsplash('1506794778202-cad84cf45f1d', 400),
  },

  blog: {
    trends: unsplash('1616486338812-3dadae4b4ace', 800),
    bedroom: unsplash('1616594039964-ae9021a400a0', 800),
    color: unsplash('1615529328331-f8917597711f', 800),
    minimal: unsplash('1600210492486-724fe5c67fb0', 800),
  },
};

export default images;
