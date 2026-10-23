/*! actiTIME hero demo — <actitime-hero-demo> web component. Built from auto.html by build-block.cjs; edit the source, not this file. */
(() => {
  if (customElements.get("actitime-hero-demo")) return;
  const CSS = "\n  :host { display: block; position: relative; width: 100%; --ink: #0d1e40; color: var(--ink); font-family: \"Montserrat\", sans-serif; }\n  * { margin: 0; padding: 0; box-sizing: border-box; }\n  .viewport { position: relative; width: 100%; height: 640px; }\n  .scaler { position: absolute; left: 50%; top: 0; width: 1890px; height: 900px; transform-origin: 50% 0; }\n  #stage { position: absolute; left: 145px; top: 48px; width: 1600px; height: 780px; }\n\n  #win { position: absolute; inset: 0; border-radius: 16px; overflow: hidden; background: #fff; border: 1px solid #e4dcfb;\n    box-shadow: 0 40px 90px -20px rgba(91, 61, 196, 0.30); font-family: \"Roboto\", sans-serif; color: var(--ink); }\n  .side { position: absolute; left: 0; top: 0; bottom: 0; height: 100%; width: 190px; background: #303e6e; color: #dfe5f7; font-size: 13px; padding-top: 14px; }\n  .logo { display: flex; align-items: center; gap: 10px; padding: 0 0 12px 12px; font-size: 18px; font-weight: 500; color: #fff; border-bottom: 1px solid #3c4a7c; }\n  .nav { padding-top: 12px; }\n  .nav a { display: flex; align-items: center; gap: 10px; padding: 9px 16px; color: #dfe5f7; text-decoration: none; }\n  .nav a.h { font-weight: 600; color: #fff; }\n  .nav a.s { padding: 8px 16px 8px 46px; color: #c9d3f2; }\n  .nav a.on { background: #385fbb; color: #fff; margin: 0 0 0 30px; padding-left: 16px; border-radius: 3px 0 0 3px; }\n  .nav svg { flex: none; }\n  .side .bot { position: absolute; left: 0; right: 0; bottom: 14px; border-top: 1px solid #3c4a7c; padding-top: 8px; }\n  .top { position: absolute; left: 190px; right: 0; top: 0; height: 34px; background: #dee7fe; display: flex; align-items: center; padding: 0 18px 0 32px; gap: 8px; font-size: 13px; color: #3d63c9; }\n  .top .r { margin-left: auto; display: flex; gap: 18px; align-items: center; color: #4e5e92; }\n  .ava { width: 26px; height: 26px; border-radius: 50%; background: #8a3fbf; color: #fff; font-size: 11px; font-weight: 600; display: flex; align-items: center; justify-content: center; }\n  .page { position: absolute; left: 190px; right: 0; top: 34px; bottom: 0; }\n  .ph { position: absolute; left: 69px; right: 40px; top: 22px; display: flex; align-items: center; }\n  .ph h2 { font-size: 26px; font-weight: 400; }\n  .ph h2 em { font-style: normal; color: #3d63c9; border-bottom: 1px dashed #3d63c9; margin-left: 8px; }\n  .tog { margin-left: auto; display: flex; border: 1px solid #c9d1e2; border-radius: 18px; padding: 3px; font-size: 14px; }\n  .tog span { padding: 5px 16px; border-radius: 14px; }\n  .tog .a { background: #4e5e92; color: #fff; }\n  .ph2 { position: absolute; left: 69px; right: 40px; top: 76px; display: flex; align-items: center; gap: 14px; }\n  .inp { width: 280px; height: 34px; border: 1px solid #d7dde8; border-radius: 4px; display: flex; align-items: center; padding-left: 12px; font-size: 13px; color: #7d879c; }\n  .plus { width: 34px; height: 34px; border-radius: 4px; background: #4e5e92; color: #fff; font-size: 22px; display: flex; align-items: center; justify-content: center; }\n  .week { margin: 0 auto; display: flex; align-items: center; gap: 18px; font-size: 24px; }\n  .week b { font-weight: 400; border-bottom: 1px dashed var(--ink); }\n  .week i { font-style: normal; color: #3d63c9; }\n  .appr { height: 34px; padding: 0 16px; border-radius: 4px; background: #e6f6ec; border: 1px solid #9fdcb5; color: #1b7a43; font-size: 13px; display: flex; align-items: center; }\n  .gear { width: 34px; height: 34px; border: 1px solid #d7dde8; border-radius: 4px; display: flex; align-items: center; justify-content: center; }\n\n  #tbl { position: absolute; left: 69px; top: 139px; width: 1301px; height: 540px; }\n  .row { position: absolute; left: 0; width: 1301px; display: flex; }\n  .left { width: 738px; display: flex; align-items: center; height: 100%; }\n  .day { width: 86px; height: 100%; position: relative; display: flex; align-items: center; justify-content: center; border-left: 1px solid #e9edf5; }\n  .day.we { width: 66px; }\n  #hdr { top: 0; height: 42px; background: #6287cf; color: #fff; border-radius: 4px 4px 0 0; overflow: hidden; }\n  #hdr .left { padding-left: 15px; font-size: 14px; gap: 6px; }\n  #hdr .left b { font-size: 16px; font-weight: 500; }\n  #hdr .left u { text-decoration: underline dotted; text-underline-offset: 3px; font-size: 13px; }\n  #hdr .day { flex-direction: column; border-left-color: #5a7ec4; line-height: 1; }\n  #hdr .day small { font-size: 11px; }\n  #hdr .day span { font-size: 18px; font-weight: 500; margin-top: 2px; }\n  #hdr .day.we { background: #517ac9; color: #a9bde6; }\n  #sum { top: 42px; height: 65px; background: #f9fafd; border-bottom: 1px solid #e9edf5; }\n  #sum .left { font-size: 12px; }\n  .kpi { display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100px; }\n  .kpi b { font-size: 14px; font-weight: 500; }\n  .kpi i { font-style: normal; font-size: 11px; margin-top: 2px; }\n  .kpi.wide { width: 136px; }\n  .vsep { width: 1px; height: 40px; background: #e2e7f0; margin: 0 22px 0 18px; }\n  .total { width: 316px; display: flex; flex-direction: column; gap: 9px; }\n  .total .line { display: flex; justify-content: space-between; font-size: 14px; }\n  .total .line b { font-weight: 500; }\n  .total .line em { font-style: normal; font-size: 12px; }\n  .track { position: relative; height: 8px; border-radius: 4px; background: #d8e9f5; overflow: hidden; }\n  .fill { position: absolute; inset: 0; border-radius: 4px; background: linear-gradient(90deg, #7fc1e9, #4ee2de); transform-origin: 0 50%; }\n  #sum .day { align-items: flex-start; padding-top: 8px; font-size: 14px; font-weight: 500; background: #f9fafd; }\n  #sum .day .bg { position: absolute; inset: 0; background: #d3fcf8; }\n  #sum .day .v { position: relative; z-index: 2; }\n  #sum .day svg { position: absolute; left: 0; bottom: 0; width: 100%; height: 36px; z-index: 1; overflow: visible; }\n  #sum .day .chk { position: absolute; left: 50%; top: 39px; width: 11px; height: 9px; margin-left: -11px; z-index: 3; }\n  #sum .day.we .v { color: #8c97ad; font-weight: 400; }\n  #leave { top: 107px; height: 34px; border-bottom: 1px solid #e9edf5; font-size: 12px; }\n  #leave .left { justify-content: flex-end; padding-right: 18px; }\n  #leave .day { font-size: 11px; }\n  .task { height: 53px; border-bottom: 1px solid #eef1f6; font-size: 12px; }\n  .task.sel { background: #f4f1ff; }\n  .c-name { width: 198px; padding-left: 10px; display: flex; flex-direction: column; justify-content: center; }\n  .c-name b { font-size: 14px; font-weight: 400; line-height: 1.25; }\n  .c-name i { font-style: normal; font-size: 11px; line-height: 1.3; color: #7a8499; }\n  .c-flag { width: 100px; display: flex; align-items: center; gap: 8px; padding-left: 15px; }\n  .c-com { width: 60px; display: flex; align-items: center; gap: 5px; padding-left: 15px; }\n  .c-st { width: 125px; display: flex; align-items: center; gap: 6px; padding-left: 14px; }\n  .c-pr { width: 155px; display: flex; align-items: center; gap: 10px; padding-left: 24px; }\n  .c-pr .pt { width: 74px; height: 7px; border-radius: 4px; background: #e6ecf3; position: relative; overflow: hidden; }\n  .c-pr .pf { position: absolute; left: 0; top: 0; height: 100%; border-radius: 4px; background: #10b981; }\n  .c-dl { width: 100px; font-size: 11px; color: #9aa3b5; }\n  .c-st small { font-size: 8px; color: #6b7590; }\n  .task .day { font-size: 14px; }\n  #foot { top: 459px; height: 81px; background: #f9fafd; flex-direction: column; }\n  #foot .sub { display: flex; height: 40px; width: 1301px; max-width: none; margin: 0; font-size: inherit; line-height: normal; font-weight: inherit; } /* undo the hero .sub paragraph styles */\n  #foot .left { justify-content: flex-end; padding-right: 18px; font-size: 13px; }\n  #foot .day { font-size: 14px; font-weight: 600; }\n  #foot .sub + .sub .day { font-size: 11px; font-weight: 400; }\n\n  /* ---------- feature windows (satellites) ---------- */\n  .sat { position: absolute; background: #fff; border-radius: 18px; border: 2px solid var(--ac);\n    box-shadow: 0 24px 50px -14px var(--sh); font-family: \"Montserrat\", sans-serif; z-index: 5; }\n  .sat .hd { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-bottom: 1px solid #f0ecf9; }\n  .sat .ic { width: 32px; height: 32px; border-radius: 9px; background: var(--bg); display: flex; align-items: center; justify-content: center; }\n  .sat .hd b { font-size: 15px; font-weight: 600; }\n  .sat .bd { padding: 14px 16px 16px; font-size: 13px; font-weight: 500; }\n  .sat .badge { position: absolute; top: -11px; right: -11px; width: 26px; height: 26px; border-radius: 50%; background: #2fbf71; box-shadow: 0 0 0 2px #fff; display: flex; align-items: center; justify-content: center; }\n  .muted { font-size: 12px; font-weight: 500; }\n  /* track time */\n  .timer { display: flex; align-items: center; gap: 14px; margin-top: 8px; }\n  .timer b { font-size: 34px; font-weight: 700; letter-spacing: 0.5px; font-variant-numeric: tabular-nums; }\n  .stop { width: 38px; height: 38px; border-radius: 50%; background: #8a6cff; display: flex; align-items: center; justify-content: center; }\n  .rec { width: 8px; height: 8px; border-radius: 50%; background: #ec4f9a; display: inline-block; margin-right: 6px; }\n  /* approve */\n  .emp { display: flex; align-items: center; gap: 10px; padding: 9px 10px; border-radius: 10px; position: relative; }\n  .emp + .emp { margin-top: 6px; }\n  .emp .av { width: 30px; height: 30px; border-radius: 50%; color: #fff; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; }\n  .emp .nm { flex: 1; }\n  .emp .nm b { display: block; font-size: 13px; font-weight: 600; }\n  .emp .nm i { font-style: normal; font-size: 11px; }\n  .st { position: relative; width: 98px; height: 26px; }\n  .st span { position: absolute; inset: 0; border-radius: 13px; font-size: 12px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 4px; }\n  .st .pend { background: #fff4cc; }\n  .st .ok { background: #e3f7ec; }\n  #emp0 .hl { position: absolute; inset: 0; border-radius: 10px; background: #e9f8ef; box-shadow: inset 0 0 0 1.5px #2fbf71; }\n  #emp0 > *:not(.hl) { position: relative; }\n  .cursor { position: absolute; left: 0; top: 0; width: 22px; height: 22px; z-index: 6; pointer-events: none; }\n  /* split variant: compact cards, so the column is no taller than the docked app window */\n  .sat .hd { padding: 8px 14px; } .sat .ic { width: 28px; height: 28px; }\n  .sat .bd { padding: 10px 14px 12px; }\n  .timer { margin-top: 4px; gap: 10px; } .timer b { font-size: 22px; } .stop { width: 20px; height: 20px; } .stop svg { width: 7px; height: 7px; }\n  .emp { padding: 6px 8px; } .emp + .emp { margin-top: 4px; } .emp .av { width: 26px; height: 26px; }\n  .bar { margin: 8px 0 6px; }\n  .line { padding: 4px 0; }\n  .tot { margin-top: 6px; } .tot b { font-size: 22px; }\n  #panel { position: absolute; opacity: 0; background: #fff; border-radius: 20px; box-shadow: 0 24px 60px rgba(124, 77, 255, 0.16), 0 2px 8px rgba(124, 77, 255, 0.08); }\n  .sat { border-radius: 14px; box-shadow: 0 8px 18px -10px var(--sh); }\n  /* Bill Clients: check sits inside the header, quiet \"Paid\" label left of the total */\n  #s3 .badge { top: 14px; right: 14px; box-shadow: none; }\n  #s3 .tot { margin-top: 8px; padding-top: 4px; } #s3 .tot b { font-size: 20px; }\n  #s3 .paid { background: none; padding: 0 0 0 6px; color: #8a96b3; font-size: 13px; font-weight: 600; }\n  .emp { gap: 8px; } .emp .nm b, .emp .nm i { white-space: nowrap; }\n  .st { width: 84px; height: 24px; } .st span { font-size: 11px; }\n  .sat .badge { top: -8px; right: -8px; width: 18px; height: 18px; } .sat .badge svg { width: 10px; height: 10px; }\n  /* manage */\n  .bar { height: 8px; border-radius: 4px; background: #f3efe2; margin: 10px 0 8px; overflow: hidden; }\n  .bar i { display: block; height: 100%; width: 100%; border-radius: 4px; background: #e0a100; transform-origin: 0 50%; }\n  .chip { display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: 11px; font-weight: 600; }\n  /* bill */\n  .line { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px dashed #f1e6ee; font-size: 12px; }\n  .tot { display: flex; align-items: center; justify-content: space-between; margin-top: 10px; }\n  .tot b { font-size: 28px; font-weight: 700; font-variant-numeric: tabular-nums; }\n  .paid { padding: 5px 12px; border-radius: 14px; background: #ffe6f1; font-size: 12px; font-weight: 700; }\n\n";
  const HTML = "<div class=\"viewport\">\n      <div class=\"scaler\" id=\"scaler\">\n        <div id=\"stage\">\n          <div id=\"win\">\n            <aside class=\"side\">\n              <div class=\"logo\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"130\" height=\"45\" viewBox=\"0 0 145 50\" fill=\"none\"><path fill=\"#F8CA41\" d=\"M5.7 23.5c1.07 0 1.93-.84 2.12-1.88a14.72 14.72 0 0111.8-11.8c1.04-.19 1.88-1.05 1.88-2.12 0-1.14-.96-2.06-2.1-1.88-8 1.3-14.28 7.58-15.58 15.59-.18 1.13.74 2.09 1.88 2.09z\"/><path fill=\"#5C9FDA\" d=\"M23.5 7.7c0 1.07.84 1.93 1.88 2.12a14.72 14.72 0 0111.8 11.8c.19 1.04 1.05 1.88 2.12 1.88 1.14 0 2.06-.96 1.88-2.1A18.95 18.95 0 0025.59 5.84c-1.13-.19-2.09.73-2.09 1.88z\"/><path fill=\"#5BBA6B\" d=\"M21.5 41.3c0-1.07-.84-1.93-1.88-2.12a14.72 14.72 0 01-11.8-11.8c-.19-1.04-1.05-1.88-2.12-1.88-1.14 0-2.06.96-1.88 2.1 1.32 8 7.65 14.27 15.59 15.57 1.13.19 2.09-.73 2.09-1.88z\"/><path fill=\"#E75044\" d=\"M39.3 25.5c-1.07 0-1.93.84-2.12 1.88a14.72 14.72 0 01-11.8 11.8c-1.04.19-1.88 1.05-1.88 2.12 0 1.14.96 2.06 2.1 1.88 8-1.32 14.27-7.65 15.57-15.59.19-1.13-.73-2.09-1.88-2.09z\"/><path fill=\"#fff\" d=\"M31.5 19.6c-.3-.4-.9-.6-1.4-.2L22 25l-6.1-3.6c-.5-.3-1.1-.1-1.4.4-.3.5-.1 1.1.4 1.4l6.6 3.9h.1c.1 0 .2.1.3.1h.4c.2 0 .3-.1.5-.2l8.6-6c.3-.3.4-.9.1-1.4z\"/><path fill=\"#FFFFFF\" d=\"M89.7 15c-.5 0-1 .2-1.3.5-.4.4-.6.8-.6 1.4 0 .6.2 1 .5 1.3.4.4.8.6 1.4.6.5 0 1-.2 1.3-.5.4-.4.5-.8.5-1.3s-.2-1-.5-1.3c-.3-.3-.8-.7-1.3-.7zm1.3 6h-4.6c-.2 0-.3.1-.3.3v1.8c0 .2.1.3.3.3h2.3v10.3c0 .2.1.2.3.2h2c.2 0 .3-.1.3-.3V21.4c0-.3-.1-.4-.3-.4zm40.3-5.1h-2c-.1 0-.2.1-.3.3l-3.3 9.1c-.1.2-.1.4-.2.6-.1.2-.1.5-.2 1 0-.2-.1-.5-.2-.9-.1-.3-.2-.6-.2-.7l-3.2-9.1c-.1-.2-.2-.3-.3-.3h-2.2c-.2 0-.3.1-.3.3l-1.1 17.4c0 .2.1.3.3.3h2.3c.2 0 .3-.1.3-.3l.4-12.5 3 8.5c.1.2.2.3.4.3h1.4c.2 0 .3-.1.4-.3l3.1-8.8v-.4.2l.4 13c0 .2.1.3.3.3h2.2c.2 0 .3-.1.3-.3l-1-17.4c0-.2-.1-.3-.3-.3zm12.8 2.5c.2 0 .3-.1.4-.2l.5-2c0-.2 0-.3-.3-.3h-8.9c-.2 0-.3.1-.3.3v17.4c0 .2.1.3.3.3h8.8c.2 0 .3-.1.3-.3v-1.4c0-.2-.1-.3-.3-.3h-6.3v-6.2h5.2c.2 0 .3-.1.3-.3v-1.6c0-.2-.1-.3-.3-.3h-5.2v-5.1h5.8zm-28.9 13.5h-2.7v-14h2.6c.2 0 .3-.2.3-.4v-1.3c0-.2-.1-.3-.3-.3h-8c-.2 0-.4.1-.4.3v1.4c0 .2.2.3.4.3h2.6v14H107c-.2 0-.3.1-.3.3v1.3c0 .2.1.3.3.3h8.2c.2 0 .3-.1.3-.3v-1.3c.1-.2-.1-.3-.3-.3zm-9.8-16H94.1c-.3 0-.4.1-.4.3V18c0 .2.1.3.3.3h4v15.2c0 .2.1.3.3.3h2c.2 0 .3-.1.3-.3V18.4h4.1c.2 0 .4-.1.4-.3l.6-1.8V16s-.1-.1-.3-.1zm-34.6 4.8c-1.6 0-3.1.5-4.1 1.6a8.35 8.35 0 00-1.8 5.4c0 2.3.8 4.3 1.9 5.3.9.8 2.3 1.2 3.8 1.2.6 0 1.1 0 1.6-.1s1.1-.3 1.5-.5c.5-.2.8-.3.9-.4.1-.1.2-.1.2-.2v-.2l-.6-1.8s-.1 0-.2-.1l-.3.1c-.6.3-1.1.6-1.4.7-.5.2-1 .2-1.5.2-1.3 0-2.1-.6-2.6-1.7-.3-.7-.5-1.3-.5-2.7 0-1.5.2-2.2.8-3 .6-.8 1.4-1.3 2.5-1.3.5 0 1.1.1 1.5.3.4.2.8.4 1.3.8.1.1.2.2.3.2l.1-.1.7-1.8c0-.1.1-.2.3-.5-.1-.1-.2-.2-.5-.4-1.1-.7-2.6-1-3.9-1zm14 10.6l-.4.1c-.2.2-.6.3-1 .4-.4.1-1 .2-1.4.2-.6 0-.7-.1-.9-.3-.3-.2-.4-.6-.4-1.5v-7.1H84c.1-.1.1-.1.2-.1 0 0 .1-.1.1-.2l.4-1.3c0-.3 0-.4-.3-.4h-3.7v-3.9c0-.3-.1-.4-.3-.3l-2.2.4c-.2 0-.3.1-.3.3v3.5H76c-.2 0-.3.1-.3.3v1.3c0 .2.1.3.3.3h1.9v7.2c0 .7 0 1.7.1 2.1.1.4.2.8.6 1.1.7.6.8.6 1.3.7.4.2 1.2.3 1.7.3.3 0 .8 0 1.3-.1.4-.1.9-.2 1.2-.3.6-.2 1-.3 1.1-.5.1-.1.1-.2.1-.4l-.3-1.7c0-.1-.1-.1-.2-.1zm-22.2.8c-.2-.5-.3-1.1-.3-1.8v-5.8c0-2.3-1.7-3.7-4.5-3.7-1.3 0-2.9.2-4.1.7-.1.1-.3.1-.4.2-.1 0-.2.1-.2.2v.2l.4 1.6.1.1c.1.1.1.1.2.1l.4-.1c.9-.5 2.1-.7 3.1-.7s1.6.2 1.9.7c.3.3.4.6.4 1.3v.8s-1 0-1.6.1c-.6.1-.8.2-1.3.3-1.4.3-2.8.9-3.5 1.7-.5.6-.8 1.4-.8 2.4s.2 2.3.8 2.9c.7.7 2.1 1.1 3.3 1.1.8 0 1.6-.2 2.3-.6.4-.2.5-.4 1-.9l.2-.2c.1.4.6 1.1.7 1.3.2.3.3.5.4.5.1 0 .3 0 .4-.1l1.5-1.1c.1 0 .1-.1.1-.3l-.1-.2-.4-.7zm-3-1.4l-.2.2c-.4.3-.7.6-1.1.8-.6.4-.9.6-1.4.6-.5 0-.6 0-1-.3-.3-.3-.6-.9-.6-1.6 0-.7.2-1.3.8-1.8.7-.7 1.7-1 3.5-1v3.1z\"/></svg></div>\n              <nav class=\"nav\">\n                <a class=\"h\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"#fff\" stroke-width=\"2\"/><path d=\"M12 7v5l3 2\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>Time-Track</a>\n                <a class=\"on\">Enter Time-Track</a><a class=\"s\">View Time-Track</a><a class=\"s\">Lock Time-Track</a><a class=\"s\">Approve Time-Track</a>\n                <a class=\"h\" style=\"font-weight:500\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><rect x=\"5\" y=\"4\" width=\"14\" height=\"17\" rx=\"2\" stroke=\"#dfe5f7\" stroke-width=\"2\"/><path d=\"M9 9h6M9 13h6\" stroke=\"#dfe5f7\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>Tasks</a>\n                <a class=\"h\" style=\"font-weight:500\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M5 20V10M10 20V5M15 20v-8M20 20V8\" stroke=\"#dfe5f7\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>Reports</a>\n                <a class=\"h\" style=\"font-weight:500\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><circle cx=\"9\" cy=\"8\" r=\"3.5\" stroke=\"#dfe5f7\" stroke-width=\"2\"/><path d=\"M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M16 4.5a3.5 3.5 0 0 1 0 7M21 20c0-3-1.8-5.2-4-5.8\" stroke=\"#dfe5f7\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>Users</a>\n              </nav>\n              <div class=\"bot nav\"><a class=\"s\" style=\"padding-left:16px\">Corporate Calendar</a><a class=\"s\" style=\"padding-left:16px\">List Management</a><a class=\"s\" style=\"padding-left:16px\">Settings</a></div>\n            </aside>\n            <div class=\"top\"><span>⇄</span> Switch to actiPLANS\n              <div class=\"r\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"#4e5e92\" stroke-width=\"1.8\"/><path d=\"M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6M12 17h.01\" stroke=\"#4e5e92\" stroke-width=\"1.8\" stroke-linecap=\"round\"/></svg><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M10 4h4v3a2 2 0 1 0 0 4h3v4h-3a2 2 0 1 0 0 4v1h-4v-1a2 2 0 1 0-4 0v1H3v-4h1a2 2 0 1 0 0-4H3V7h3V4z\" stroke=\"#4e5e92\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/></svg><div class=\"ava\">MD</div></div>\n            </div>\n            <div class=\"page\">\n              <div class=\"ph\"><h2>Enter Time-Track for<em>Me</em></h2><div class=\"tog\"><span>Calendar</span><span class=\"a\">Timesheet</span></div></div>\n              <div class=\"ph2\"><div class=\"inp\">+ Add task by name...</div><div class=\"plus\">+</div>\n                <div class=\"week\"><i>‹</i><b>Oct 12 - Oct 18, 2026</b><i>›</i></div>\n                <div class=\"appr\">Automatically Approved</div><div class=\"gear\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"3\" stroke=\"#4e5e92\" stroke-width=\"2\"/><path d=\"M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1\" stroke=\"#4e5e92\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg></div></div>\n              <div id=\"tbl\"></div>\n            </div>\n          </div>\n          <div id=\"panel\"></div><div id=\"sats\"></div>\n        </div>\n      </div></div>";

  // fonts used inside the block (Montserrat for cards, Roboto for the app UI)
  if (!document.querySelector('link[data-actitime-hero-fonts]')) {
    const l = document.createElement("link"); l.rel = "stylesheet"; l.dataset.actitimeHeroFonts = "";
    l.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto:wght@400;500;600&display=swap";
    document.head.appendChild(l);
  }

  class ActitimeHeroDemo extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      if (!window.gsap) { console.error("<actitime-hero-demo>: load GSAP 3 before this script"); return; }
      const host = this, root = this.attachShadow({ mode: "open" });
      root.innerHTML = "<style>" + CSS + "</style>" + HTML;
      // ---------- data ----------
      const DAYS = [["Mon","12"],["Tue","13"],["Wed","14"],["Thu","15"],["Fri","16"]];
      const ROWS = [
        { n: "Logo design", c: "Acme / Branding", st: "In Progress", pc: "85.7%", pf: 0.857, h: [180,120,180,120,120] },
        { n: "Client calls", c: "Acme / Support", st: "Planning", pc: "66.7%", pf: 0.667, h: [60,60,0,60,60] },
        { n: "Website", c: "Nova / Redesign", st: "New", pc: "83.3%", pf: 0.833, h: [120,120,60,0,0] },
        { n: "Blog post", c: "Nova / Blog", st: "In Progress", pc: "125.0%", pf: 1, over: true, h: [0,120,180,180,120] },
        { n: "Sprint review", c: "Orbit / Mobile app", st: "In Progress", pc: "83.3%", pf: 0.833, h: [120,0,0,60,120] },
        { n: "QA testing", c: "Orbit / Mobile app", st: "In Progress", pc: "100.0%", pf: 1, h: [0,60,60,60,60] },
      ];
      const fmt = (m) => Math.floor(m / 60) + ":" + String(Math.round(m % 60)).padStart(2, "0");
      const stIcon = (st) => { const c = st === "New" ? "#f59e0b" : "#008a5f";
        return `<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="none" stroke="${c}" stroke-width="1.6"/><circle cx="8" cy="8" r="4.2" fill="${c}" opacity="0.25"/><path d="M8 4.5V8l2.3 1.4" stroke="${c}" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`; };
      const FLAG = `<svg width="12" height="15" viewBox="0 0 12 15"><rect width="2" height="15" rx="1" fill="#4c6984"/><path d="M2.4 1h8.4l-2 3 2 3H2.4z" fill="#4c6984" opacity="0.45"/></svg>`;
      const COM = `<svg width="14" height="13" viewBox="0 0 14 13"><path d="M1.5 1h11v8H6l-3 3V9H1.5z" fill="none" stroke="#8c97ad" stroke-width="1.2" stroke-linejoin="round"/></svg>`;
      const CHECK = `<svg viewBox="0 0 9 7" width="11" height="9"><path d="M6.72.26c.23-.28.68-.34 1-.13.31.21.37.6.14.88L3.91 5.74a.74.74 0 0 1-1.11.04L.17 3.01c-.25-.26-.22-.66.08-.88.3-.23.75-.2 1 .07l1.92 2.02L6.72.26z" fill="#2ed1e5"/></svg>`;
      const wavePath = (w, h, H) => { const y0 = H, y1 = H - h, k = w / 86.14;
        return `M0 ${y0} C${17.95*k} ${y0} ${26.02*k} ${y1} ${43.07*k} ${y1} C${60.12*k} ${y1} ${68.19*k} ${y0} ${w} ${y0}`; };
      const q = (s) => root.querySelector(s);
    
      // ---------- table ----------
      let html = `<div class="row" id="hdr"><div class="left"><b>Task</b> / <u>Customer</u> / <u>Project</u></div>`;
      DAYS.forEach(([d, n]) => (html += `<div class="day"><small>${d}</small><span>${n}</span></div>`));
      html += `<div class="day we"><small>Sat</small><span>17</span></div><div class="day we"><small>Sun</small><span>18</span></div></div>`;
      html += `<div class="row" id="sum"><div class="left" style="padding-left:6px">
        <div class="kpi wide"><b id="k-reg">0:00</b><i>Regular Working Time</i></div><div class="kpi"><b>0:00</b><i>Overtime</i></div><div class="kpi"><b>0:00</b><i>Leave Time</i></div>
        <div class="vsep"></div><div class="total"><div class="line"><b>Total: <span id="k-tot">0:00</span></b><em>of 40:00</em></div><div class="track"><div class="fill" id="barw"></div></div></div></div>`;
      DAYS.forEach((_, d) => (html += `<div class="day" id="sd${d}"><div class="bg"></div><span class="v">0:00</span>
        <svg viewBox="0 0 86 36" preserveAspectRatio="none"><defs><linearGradient id="wg${d}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#acfef7"/><stop offset="1" stop-color="#bdeaff"/></linearGradient>
        <linearGradient id="ws${d}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5aa9e6"/><stop offset=".5" stop-color="#2ed1e5"/><stop offset="1" stop-color="#5aa9e6"/></linearGradient></defs>
        <path class="wf" fill="url(#wg${d})"/><path class="ws" fill="none" stroke="url(#ws${d})" stroke-width="1.9"/></svg><div class="chk">${CHECK}</div></div>`));
      html += `<div class="day we"><span class="v">0</span><svg viewBox="0 0 66 36" preserveAspectRatio="none"><path fill="#cfe9fb" d="${wavePath(66,30,36)}"/></svg></div>`.repeat(2) + `</div>`;
      html += `<div class="row" id="leave"><div class="left">Total Leave Time:&nbsp; 0:00</div>${'<div class="day">0</div>'.repeat(5)}<div class="day we"></div><div class="day we"></div></div>`;
      ROWS.forEach((r, i) => {
        html += `<div class="row task" id="r${i}" style="top:${141 + 53*i}px"><div class="left"><div class="c-name"><b>${r.n}</b><i>${r.c}</i></div>
          <div class="c-flag">${FLAG}<span>Unkno...</span></div><div class="c-com"><span>0</span>${COM}</div><div class="c-st">${stIcon(r.st)}<span style="color:${r.st === "New" ? "#f59e0b" : "#0f9d58"}">${r.st} <small>▾</small></span></div>
          <div class="c-pr"><span style="width:40px" id="pc${i}">0.0%</span><div class="pt"><div class="pf" id="pf${i}" style="width:0%"></div></div></div><div class="c-dl">No deadline</div></div>`;
        r.h.forEach((m, d) => (html += `<div class="day"><span class="hv" id="h${i}_${d}"></span></div>`));
        html += `<div class="day we"></div><div class="day we"></div></div>`;
      });
      html += `<div class="row" id="foot"><div class="sub"><div class="left">Total Working Time:&nbsp; <span id="k-twt">0:00</span></div>`;
      DAYS.forEach((_, d) => (html += `<div class="day"><span id="f${d}">0:00</span></div>`));
      html += `<div class="day we"></div><div class="day we"></div></div><div class="sub"><div class="left">Overtime:&nbsp; 0:00</div>${'<div class="day">0</div>'.repeat(5)}<div class="day we"></div><div class="day we"></div></div></div>`;
      q("#tbl").innerHTML = html;
    
      // ---------- feature windows ----------
      const IC = {
        clock: '<circle cx="12" cy="12" r="8" stroke="C" stroke-width="2" fill="none"/><path d="M12 7v5l3 2" stroke="C" stroke-width="2" stroke-linecap="round" fill="none"/>',
        check: '<rect x="4" y="4" width="16" height="16" rx="4" stroke="C" stroke-width="2" fill="none"/><path d="M8 12.5l2.8 2.7L16.5 9" stroke="C" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
        list: '<path d="M9 7h10M9 12h10M9 17h10" stroke="C" stroke-width="2" stroke-linecap="round"/><circle cx="5" cy="7" r="1.3" fill="C"/><circle cx="5" cy="12" r="1.3" fill="C"/><circle cx="5" cy="17" r="1.3" fill="C"/>',
        dollar: '<path d="M15.5 8.5c-.6-1-1.8-1.5-3.3-1.5-1.9 0-3.2.9-3.2 2.3 0 3.3 6.8 1.7 6.8 5 0 1.5-1.4 2.5-3.5 2.5-1.6 0-2.9-.6-3.5-1.7M12 5v2M12 17v2" stroke="C" stroke-width="2" stroke-linecap="round" fill="none"/>',
      };
      const icon = (k, c, s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none">${IC[k].replaceAll('"C"', '"' + c + '"')}</svg>`;
      const BADGE = '<div class="badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 12.5l4 4 8-9" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
      const head = (t, k, ac) => `<div class="hd"><div class="ic">${icon(k, ac)}</div><b>${t}</b></div>`;
      const SATS = [
        { id: "s0", ac: "#8a6cff", bg: "#efe9ff", sh: "rgba(138,108,255,0.32)", x: -130, y: 430, w: 330, html: `${head("Track Time", "clock", "#8a6cff")}
          <div class="bd"><div class="muted"><span class="rec"></span>Logo design · Acme / Branding</div>
          <div class="timer"><b id="clock">02:14:36</b><div class="stop"><svg width="12" height="12" viewBox="0 0 12 12"><rect width="12" height="12" rx="2" fill="#fff"/></svg></div></div></div>` },
        { id: "s1", ac: "#2fbf71", bg: "#e3f7ec", sh: "rgba(47,191,113,0.30)", x: 1330, y: 240, w: 390, html: `${head("Approve Timesheets", "check", "#2fbf71")}
          <div class="bd">
            <div class="emp" id="emp0"><div class="hl"></div><div class="av" style="background:#8a6cff">EC</div><div class="nm"><b>Emma Clarke</b><i>Week 42 · 40:00</i></div>
              <div class="st"><span class="pend">Pending</span><span class="ok">✓ Approved</span></div></div>
            <div class="emp"><div class="av" style="background:#2fbf71">JR</div><div class="nm"><b>James Reed</b><i>Week 42 · 38:30</i></div><div class="st"><span class="pend">Pending</span></div></div>
          </div>
          <svg class="cursor" id="cur" viewBox="0 0 24 24"><path d="M4 2l15 9-6.5 1.6L9.5 19z" fill="#0d1e40" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>` },
        { id: "s2", ac: "#e0a100", bg: "#fff1c7", sh: "rgba(224,161,0,0.30)", x: 1170, y: -48, w: 300, html: `${head("Manage Tasks", "list", "#e0a100")}
          <div class="bd"><div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:14px">Sprint review</b><span class="chip" style="background:#fff1c7">In Progress</span></div>
          <div class="bar"><i id="mbar"></i></div><div class="muted"><span id="mh">0h</span> of 30h estimate · Orbit</div></div>` },
        { id: "s3", ac: "#ec4f9a", bg: "#ffe6f1", sh: "rgba(236,79,154,0.30)", x: 590, y: 640, w: 350, html: `${head("Bill Clients", "dollar", "#ec4f9a")}
          <div class="bd"><div class="muted" style="margin-bottom:4px">Invoice #1042 · Acme</div>
          <div class="line"><span>Logo design · 26h × $80</span><b>$2,080</b></div><div class="line"><span>Client calls · 14h × $80</span><b>$1,120</b></div>
          <div class="tot"><span class="paid" id="paid">Paid</span><b id="btot">$0</b></div></div>` },
      ];
      q("#sats").innerHTML = SATS.map((s) => `<div class="sat" id="${s.id}" style="left:${s.x}px;top:${s.y}px;width:${s.w}px;--ac:${s.ac};--bg:${s.bg};--sh:${s.sh}">${s.html}${BADGE}</div>`).join("");
    
      // compact layout: the app docks right (bigger), the cards sit in one white panel on the left that
      // covers the app's sidebar (190px × scale + a few px); the panel is exactly as tall as the docked window.
      const ORDER = [0, 2, 1, 3], WIN_SCALE = 0.9, WIN_X = -20;
      const WIN_TOP = 390 - (780 * WIN_SCALE) / 2, WIN_H = 780 * WIN_SCALE;
      const PANEL_X = 19, PANEL_W = 316, PAD = 15, COL_X = PANEL_X + PAD, COL_W = PANEL_W - 2 * PAD;
      const stackCards = () => { ORDER.forEach((i) => { const el = q(`#${SATS[i].id}`); el.style.left = COL_X + "px"; el.style.width = COL_W + "px"; });
        Object.assign(q("#panel").style, { left: PANEL_X + "px", top: WIN_TOP + "px", width: PANEL_W + "px", height: WIN_H + "px" });
        const hs = ORDER.map((i) => q(`#${SATS[i].id}`).offsetHeight);
        const gap = (WIN_H - 2 * PAD - hs.reduce((a, b) => a + b, 0)) / (hs.length - 1);
        let y = WIN_TOP + PAD;
        ORDER.forEach((i, k) => { q(`#${SATS[i].id}`).style.top = Math.round(y) + "px"; y += hs[k] + gap; }); };
      stackCards(); document.fonts.ready.then(stackCards);
    
      // fit the 1890-wide scene into the viewport (top-aligned, no big gap under the hero)
      let sceneScale = 0.87;
      const fit = () => { const w = host.clientWidth || 1200; const s = (sceneScale = Math.min(1, w / 1890));
        q("#scaler").style.transform = `translateX(-50%) scale(${s})`;
        q(".viewport").style.height = Math.round((48 + 780 + 40) * s) + "px"; };
      fit(); new ResizeObserver(fit).observe(host);
    
      // ---------- table state = pure function of day progress (works both directions) ----------
      const clamp = (v) => Math.max(0, Math.min(1, v));
      const out = (p) => 1 - Math.pow(1 - p, 3);
      const DT = DAYS.map((_, d) => ROWS.reduce((a, r) => a + r.h[d], 0));
      const r5 = (m) => fmt(Math.round(m / 5) * 5);
      // task progress: logged hours vs. estimate (final values match the product screenshot)
      const EST = ROWS.map((r) => r.h.reduce((a, b) => a + b, 0) / (parseFloat(r.pc) / 100));
      const renderTable = (t) => {
        let week = 0; const logged = ROWS.map(() => 0);
        DAYS.forEach((_, d) => {
          const p = clamp(t - d);
          ROWS.forEach((r, i) => { const el = q(`#h${i}_${d}`); if (!r.h[d]) return;
            const pi = clamp((p - i * 0.06) / 0.6); el.style.opacity = pi; el.style.transform = `translateY(${(1 - pi) * 6}px)`; el.textContent = pi > 0 ? r5(r.h[d] * out(pi)) : ""; logged[i] += r.h[d] * out(pi); });
          const m = DT[d] * out(clamp(p / 0.8)); week += m;
          q(`#sd${d} .v`).textContent = r5(m); q(`#f${d}`).textContent = r5(m);
          q(`#sd${d} .bg`).style.opacity = clamp(p / 0.4);
          const h = 27 * out(clamp((p - 0.05) / 0.8));
          q(`#sd${d} .wf`).setAttribute("d", wavePath(86, h, 36) + " Z"); q(`#sd${d} .ws`).setAttribute("d", wavePath(86, h, 36));
          const pc = clamp((p - 0.7) / 0.3), chk = q(`#sd${d} .chk`); chk.style.opacity = pc; chk.style.transform = `translateY(${(1 - pc) * 5}px)`;
        });
        ROWS.forEach((r, i) => { const pct = (logged[i] / EST[i]) * 100;
          q(`#pc${i}`).textContent = pct.toFixed(1) + "%";
          q(`#pc${i}`).style.color = pct > 100 ? "#f7931e" : "#10b981"; const bar = q(`#pf${i}`); bar.style.width = Math.min(pct, 100) + "%"; bar.style.background = pct > 100 ? "#f7931e" : "#10b981"; });
        const s = r5(week); q("#k-tot").textContent = s; q("#k-reg").textContent = s; q("#k-twt").textContent = s;
        q("#barw").style.transform = `scaleX(${week / 2400})`;
      };
      renderTable(0);
    
      // ---------- live timer in Track Time (ticks while visible) ----------
      let secs = 2 * 3600 + 14 * 60 + 36;
      setInterval(() => { if (parseFloat(getComputedStyle(q("#s0")).opacity) > 0.5) { secs++;
        const h = String(Math.floor(secs / 3600)).padStart(2, "0"), m = String(Math.floor(secs / 60) % 60).padStart(2, "0"), s = String(secs % 60).padStart(2, "0");
        q("#clock").textContent = `${h}:${m}:${s}`; } }, 1000);
    
      // ---------- scroll timeline: ~900px total, one wheel notch per feature window ----------
      gsap.set(".sat", { opacity: 0 }); gsap.set(".sat .badge", { opacity: 0, scale: 0.5 });
      gsap.set("#emp0 .hl", { opacity: 0 }); gsap.set(".st .ok", { opacity: 0 }); gsap.set("#cur", { opacity: 0 });
      gsap.set("#mbar", { scaleX: 0 }); // "Paid" stays visible the whole time
    
      // auto-play: the same story as the scroll version, but on a clock — plays, holds the last frame 3 s, starts over
      const HOLD = parseFloat(host.getAttribute("hold")) || 3, SPEED = 0.55; // timeline units → seconds: 1 unit ≈ 1.8 s, whole run ≈ 8.4 s
      // the timeline ends with an outro that returns everything to the first frame, so the loop restarts without a jump.
      // Timeline time is slowed by timeScale, so real seconds are converted with u() wherever exact timing matters.
      const u = (sec) => sec * SPEED;
      const tl = gsap.timeline({ paused: true, defaults: { ease: "none" }, repeat: -1, repeatDelay: u(0.3) });
      tl.timeScale(SPEED);
    
      // 2) week fills
      const days = { t: 0 };
      tl.fromTo(days, { t: 0 }, { t: 5, duration: 1, onUpdate: () => renderTable(days.t) }, 0);
    
      // 3) the app slides to the right and shrinks a little, freeing a column on the left
      tl.to("#win", { x: WIN_X, scale: WIN_SCALE, transformOrigin: "100% 50%", duration: 0.6, ease: "power2.inOut" }, 1.0);
      tl.fromTo("#panel", { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }, 1.3);
    
      // 4) feature cards slide out of the app into that column, top to bottom, unhurried
      const reveal = (i, t0) => { const el = q(`#${SATS[i].id}`);
        tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4 }, t0);
        tl.fromTo(el, { x: -24, scale: 0.94 }, { x: 0, scale: 1, duration: 0.8, ease: "power2.out" }, t0);
        tl.fromTo(`#${SATS[i].id} .badge`, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" }, t0 + 0.75); };
      ORDER.forEach((i, k) => reveal(i, 1.5 + k * 0.5)); // Track 1.5, Manage 2.0, Approve 2.5, Bill 3.0
    
      // ...and each one shows its action once it has landed
      const mh = { v: 0 };
      tl.fromTo("#mbar", { scaleX: 0 }, { scaleX: 0.83, duration: 0.8, ease: "power2.out" }, 2.5);
      tl.fromTo(mh, { v: 0 }, { v: 25, duration: 0.8, ease: "power2.out", onUpdate: () => (q("#mh").textContent = Math.round(mh.v) + "h") }, 2.5);
      tl.fromTo("#cur", { opacity: 0, x: 160, y: 130 }, { opacity: 1, x: 232, y: 80, duration: 0.5, ease: "power2.out" }, 3.1);
      tl.fromTo("#cur", { scale: 1 }, { scale: 0.8, duration: 0.06 }, 3.6).to("#cur", { scale: 1, duration: 0.06 }, 3.66).to("#cur", { opacity: 0, duration: 0.3 }, 3.95);
      tl.fromTo("#emp0 .hl", { opacity: 0 }, { opacity: 1, duration: 0.15 }, 3.65);
      tl.fromTo("#emp0 .st .pend", { opacity: 1 }, { opacity: 0, duration: 0.12 }, 3.68);
      tl.fromTo("#emp0 .st .ok", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.15 }, 3.7);
      const bt = { v: 0 };
      tl.fromTo(bt, { v: 0 }, { v: 3200, duration: 0.8, ease: "power2.out", onUpdate: () => (q("#btot").textContent = "$" + (Math.round(bt.v / 10) * 10).toLocaleString("en-US")) }, 3.6);
    
      // outro after a HOLD-second pause on the last frame: cards fade out bottom-up, the panel leaves,
      // the app grows back to full size while the week empties — ending exactly on the first frame
      const OUT = 4.6 + u(HOLD);
      [...ORDER].reverse().forEach((i, k) =>
        tl.to(`#${SATS[i].id}`, { opacity: 0, x: -24, duration: u(0.35), ease: "power2.in" }, OUT + u(k * 0.12)));
      tl.to("#panel", { opacity: 0, x: -40, duration: u(0.4), ease: "power2.in" }, OUT + u(0.4));
      tl.to("#win", { x: 0, scale: 1, duration: u(0.9), ease: "power2.inOut" }, OUT + u(0.5));
      tl.to(days, { t: 0, duration: u(0.9), ease: "power1.inOut", onUpdate: () => renderTable(days.t) }, OUT + u(0.5));
    
      const STORY_END = 4.6; // timeline time of the finished frame (before the outro)
      const still = host.hasAttribute("static") || matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.fonts.ready.then(() => {
        stackCards();
        if (still) { tl.pause(STORY_END); renderTable(5); return; }
        let started = false;
        new IntersectionObserver(([e]) => {
          if (e.isIntersecting) { if (!started) { started = true; gsap.delayedCall(0.4, () => tl.play(0)); } else tl.resume(); }
          else if (started) tl.pause();
        }, { threshold: 0.25 }).observe(host);
      });
    }
  }
  customElements.define("actitime-hero-demo", ActitimeHeroDemo);
})();
