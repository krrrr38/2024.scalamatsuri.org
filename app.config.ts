export default defineAppConfig({
  year: '2024',
  // NOTE: ヘッダーを定義しています。非公開にする場合は published: false にしてください
  pages: [
    { path: '/', published: true, header: false, order: 0 },
    { path: 'code-of-conduct', published: true, header: true, order: 1 },
    { path: 'call-for-proposals', published: false, header: true, order: 20 },
    { path: 'proposals', published: false, header: true, order: 21 },
    { path: 'programs', published: false, header: true, order: 22 },
    { path: 'open-mic-conference', published: false, header: true, order: 23 },
    { path: 'sponsorship', published: true, header: true, order: 30 },
    { path: 'sponsors', published: false, header: false, order: 31 },
    { path: 'cm', published: false, header: true, order: 32 },
    { path: 'ticket', published: false, header: false, order: 90 },
    { path: 'staff', published: false, header: true, order: 100 },
    { path: 'extra-staff', published: false, header: true, order: 101 },
  ],
})
