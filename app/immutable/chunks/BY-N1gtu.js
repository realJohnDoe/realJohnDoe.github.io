import{C as S,I as W,_ as se,R as G,F as re,m as de,a as Z,G as he,ah as le,H as $,J as z,M as P,Y as ce,ai as pe,aj as Q,U as ue,T as J,ak as fe,W as ge,al as te,j as me,am as we,an as Y,ao as ye,ap as K,aq as be,ar as ke,q as ve,as as v,D as Ie,N as ne,Q as ae,at as F,au as Te,av as _e,aw as Me,ax as Ae,V as xe,O as Oe,Z as Ce,ay as Ee}from"./F-D7e44U.js";import{a as Se,f as De}from"./CzQn5dun.js";import"./mTxIAT8z.js";function Re(e,n,a){for(var s=[],u=n.length,d,r=n.length,f=0;f<u;f++){let y=n[f];ae(y,()=>{if(d){if(d.pending.delete(y),d.done.add(y),d.pending.size===0){var l=e.outrogroups;q(e,Y(d.done)),l.delete(d),l.size===0&&(e.outrogroups=null)}}else r-=1},!1)}if(r===0){var i=s.length===0&&a!==null&&e.pending.size===0;if(i){var p=a,o=p.parentNode;Ae(o),o.append(p),e.items.clear()}q(e,n,!i)}else d={pending:new Set(n),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(d)}function q(e,n,a=!0){var s;if(e.pending.size>0){s=new Set;for(const r of e.pending.values())for(const f of r)s.add(e.items.get(f).e)}for(var u=0;u<n.length;u++){var d=n[u];if(s!=null&&s.has(d)){d.f|=v;const r=document.createDocumentFragment();xe(d,r)}else Oe(n[u],a)}}var ee;function Ve(e,n,a,s,u,d=null){var r=e,f=new Map,i=(n&te)!==0;if(i){var p=e;r=S?W(se(p)):p.appendChild(G())}S&&re();var o=null,y=me(()=>{var c=a();return we(c)?c:c==null?[]:Y(c)}),l,b=new Map,k=!0;function x(c){T.effect.f&Ie||(T.pending.delete(c),T.fallback=o,je(T,l,r,n,s),o!==null&&(l.length===0?o.f&v?(o.f^=v,R(o,null,r)):ne(o):ae(o,()=>{o=null})))}function t(c){T.pending.delete(c)}var h=de(()=>{l=Z(y);var c=l.length;let m=!1;if(S){var j=he(r)===le;j!==(c===0)&&(r=$(),W(r),z(!1),m=!0)}for(var _=new Set,g=ue,C=ge(),M=0;M<c;M+=1){S&&P.nodeType===ce&&P.data===pe&&(r=P,m=!0,z(!1));var E=l[M],O=s(E,M),w=k?null:f.get(O);w?(w.v&&Q(w.v,E),w.i&&Q(w.i,M),C&&g.unskip_effect(w.e)):(w=Ne(f,k?r:ee??(ee=G()),E,O,M,u,n,a),k||(w.e.f|=v),f.set(O,w)),_.add(O)}if(c===0&&d&&!o&&(k?o=J(()=>d(r)):(o=J(()=>d(ee??(ee=G()))),o.f|=v)),c>_.size&&fe(),S&&c>0&&W($()),!k)if(b.set(g,_),C){for(const[N,H]of f)_.has(N)||g.skip_effect(H.e);g.oncommit(x),g.ondiscard(t)}else x(g);m&&z(!0),Z(y)}),T={effect:h,items:f,pending:b,outrogroups:null,fallback:o};k=!1,S&&(r=P)}function D(e){for(;e!==null&&!(e.f&_e);)e=e.next;return e}function je(e,n,a,s,u){var E,O,w,N,H,B,L,U,X;var d=(s&Me)!==0,r=n.length,f=e.items,i=D(e.effect.first),p,o=null,y,l=[],b=[],k,x,t,h;if(d)for(h=0;h<r;h+=1)k=n[h],x=u(k,h),t=f.get(x).e,t.f&v||((O=(E=t.nodes)==null?void 0:E.a)==null||O.measure(),(y??(y=new Set)).add(t));for(h=0;h<r;h+=1){if(k=n[h],x=u(k,h),t=f.get(x).e,e.outrogroups!==null)for(const I of e.outrogroups)I.pending.delete(t),I.done.delete(t);if(t.f&F&&(ne(t),d&&((N=(w=t.nodes)==null?void 0:w.a)==null||N.unfix(),(y??(y=new Set)).delete(t))),t.f&v)if(t.f^=v,t===i)R(t,null,a);else{var T=o?o.next:i;t===e.effect.last&&(e.effect.last=t.prev),t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),A(e,o,t),A(e,t,T),R(t,T,a),o=t,l=[],b=[],i=D(o.next);continue}if(t!==i){if(p!==void 0&&p.has(t)){if(l.length<b.length){var c=b[0],m;o=c.prev;var j=l[0],_=l[l.length-1];for(m=0;m<l.length;m+=1)R(l[m],c,a);for(m=0;m<b.length;m+=1)p.delete(b[m]);A(e,j.prev,_.next),A(e,o,j),A(e,_,c),i=c,o=_,h-=1,l=[],b=[]}else p.delete(t),R(t,i,a),A(e,t.prev,t.next),A(e,t,o===null?e.effect.first:o.next),A(e,o,t),o=t;continue}for(l=[],b=[];i!==null&&i!==t;)(p??(p=new Set)).add(i),b.push(i),i=D(i.next);if(i===null)continue}t.f&v||l.push(t),o=t,i=D(t.next)}if(e.outrogroups!==null){for(const I of e.outrogroups)I.pending.size===0&&(q(e,Y(I.done)),(H=e.outrogroups)==null||H.delete(I));e.outrogroups.size===0&&(e.outrogroups=null)}if(i!==null||p!==void 0){var g=[];if(p!==void 0)for(t of p)t.f&F||g.push(t);for(;i!==null;)!(i.f&F)&&i!==e.fallback&&g.push(i),i=D(i.next);var C=g.length;if(C>0){var M=s&te&&r===0?a:null;if(d){for(h=0;h<C;h+=1)(L=(B=g[h].nodes)==null?void 0:B.a)==null||L.measure();for(h=0;h<C;h+=1)(X=(U=g[h].nodes)==null?void 0:U.a)==null||X.fix()}Re(e,g,M)}}d&&Te(()=>{var I,V;if(y!==void 0)for(t of y)(V=(I=t.nodes)==null?void 0:I.a)==null||V.apply()})}function Ne(e,n,a,s,u,d,r,f){var i=r&be?r&ke?K(a):ve(a,!1,!1):null,p=r&ye?K(u):null;return{v:i,i:p,e:J(()=>(d(n,i??a,p??u,f),()=>{e.delete(s)}))}}function R(e,n,a){if(e.nodes)for(var s=e.nodes.start,u=e.nodes.end,d=n&&!(n.f&v)?n.nodes.start:a;s!==null;){var r=Ce(s);if(d.before(s),s===u)return;s=r}}function A(e,n,a){n===null?e.effect.first=a:n.next=a,a===null?e.effect.last=n:a.prev=n}const oe={title:"Meridian: Why I built a Markdown-first calendar",date:"2026-07-23T00:00:00.000Z"},{title:Ze,date:$e}=oe;var He=De(`<p>Until a few months ago, my notes, tasks, and appointments were spread across five apps.
Notes lived in <a href="https://obsidian.md" rel="nofollow">Obsidian</a>. My own tasks lived in the <a href="https://tasknotes.dev/" rel="nofollow">TaskNotes</a> plugin inside Obsidian. Tasks I share with my wife
lived in <a href="https://todoist.com" rel="nofollow">Todoist</a>. Appointments lived in <a href="https://calendar.proton.me/" rel="nofollow">Proton Calendar</a>. Shopping lists lived in <a href="https://keep.google.com" rel="nofollow">Google Keep</a>.</p> <p>None of these apps are bad. What bothered me was the seams between them — and two things
I couldn’t fix by switching to a different combination.</p> <p>The first: I want to keep track of our child’s calendar, but she doesn’t need a Proton
account. Every system I tried wanted her to <em>be a user</em> before she could <em>have a
calendar</em>. I wanted something closer to the paper calendar on the kitchen wall: everyone
writes on it, everyone reads it, nobody owns it. The corporate version of the same
problem shows up at work regularly — a colleague creates a recurring meeting, goes on
vacation, and now nobody can move it.</p> <p>The second: I wanted tags to be real things. In Obsidian a tag is a label. I wanted a tag
that can have its own description and its own tags.</p> <p>So I built <a href="https://realjohndoe.github.io/meridian/" rel="nofollow">Meridian</a>: a calendar, task manager,
and notes app where every entry is a plain Markdown file.</p> <figure class="post-figure post-figure--phone"><img src="/blog/images/agenda-view.png" width="732" height="1411" alt="Meridian's agenda view on a phone, showing scheduled tasks and events grouped by day."/> <figcaption>The agenda view: scheduled tasks and events on a single timeline.</figcaption></figure> <p>What follows is roughly how that went, from those first ideas to the app I use today.</p> <h2>What I knew before I wrote any code</h2> <p>A handful of things, and I’d been turning them over for a while. I wanted a Markdown-based
app for notes, tasks, and calendar events, where every entry is a Markdown file with YAML
frontmatter. The important part was a negative: I did <em>not</em> want to model the entity types
explicitly. A thing would be a task because it had a <code>done</code> field, an event because it had
a <code>date</code>, a note because it had neither. Type was something you read off the metadata, not
something you declared.</p> <p>On top of that: <code>[[wikilinks]]</code> between entries, because links are what turn a collection
of notes into something you can actually navigate; nested tasks shown inline; and tags
that are entries in their own right, not just labels.</p> <p>These were the ideas I set out with, and I still like them. Most of what came next I
didn’t plan.</p> <h2>A prototype, and a year of not building it</h2> <p>In spring 2025 I built a first prototype called <a href="https://realjohndoe.github.io/idea-craft/" rel="nofollow">idea-craft</a>. Then I discovered TaskNotes,
which already did much of what I was sketching, and did the sensible thing: I stopped
building and used it for a year instead.</p> <p>That year turned out to be important groundwork. It taught me two things I couldn’t have
reasoned my way to from a blank page.</p> <p><strong>Mobile is where this is decided.</strong> Obsidian is excellent on the desktop, but I use these
tools mostly on a phone. TaskNotes does a good job there — the limit isn’t the plugin, it’s
that a plugin has to work through Obsidian’s own interface. Small things end up taking a
couple of taps more than they would in <a href="https://calendar.google.com" rel="nofollow">Google Calendar</a> or
Todoist, and those taps add up when you’re capturing something quickly. That gap is the
biggest single reason I eventually built something of my own.</p> <p><strong>Recurrence has to stay readable.</strong> iCal (<a href="https://datatracker.ietf.org/doc/html/rfc5545" rel="nofollow">RFC 5545</a>)
is the standard, and it’s capable — my whole calendar could probably be encoded as its <code>RRULE</code>, <code>RDATE</code>, and <code>EXDATE</code> strings. But those strings are built for machines: <code>FREQ=MONTHLY;BYDAY=1FR,2FR</code> is no fun to hand-edit, and the messy real cases only get
worse. Since the point was files you can read, I wanted recurrence I could read too. (If
iCal compatibility ever matters, I can add it underneath.)</p> <h2>A hundred versions on a phone</h2> <p>For a moment I considered not building an app at all — just proposing my recurrence format
to TaskNotes and staying in Obsidian. But everything I really wanted to fix, from the
mobile UX to a shared calendar without accounts, lived outside the file format, where a
plugin couldn’t reach.</p> <p>So this spring I started over on my phone, in a single very long chat session with <a href="https://claude.ai" rel="nofollow">Claude</a> — which turned out to be good enough at spinning up working
web prototypes that I could design by using, not just by sketching. I built one I called <strong>plaintext-os</strong> and iterated on it something like a hundred times — most of those on one
question, what the frontmatter should actually look like, and the rest on making it
usable. Somewhere in the middle it got the name Meridian.</p> <p>It worked. That was the problem. It worked well enough to show me the real version of the
app — and that a single generated file, growing with every change, wasn’t a foundation I
could keep building on.</p> <figure class="post-figure post-figure--phone"><img src="/blog/images/plaintext-os-prototype.png" loading="lazy" width="655" height="1391" alt="An early mobile prototype of the app — an agenda list of standups and tasks in a dark theme."/> <figcaption>An early version from that chat, by then already called Meridian — one of about a hundred iterations built on my phone.</figcaption></figure> <p>On <strong>2026-05-22</strong> I moved to a desktop, set the prototype aside, and started a proper
repository: React, TypeScript, Tailwind, shadcn/ui, Vite. The first day’s commits
scaffold the app, wire up GitHub Pages, and <a href="https://github.com/realJohnDoe/meridian/commit/a23d5ab" rel="nofollow">turn it into a PWA</a> — a
progressive web app rather than native ones: I need to support both iOS and Android, and a
single PWA is far less to maintain than two native apps.</p> <p><em>(How that rewrite actually went — and what two months of building this way taught me —
is its own story, and its own article.)</em></p> <h2>Then the “simple” idea started growing</h2> <p>Here’s the part I want to be honest about, because it’s the real shape of the project.</p> <p>One thing AI changes about building software is that a throwaway dev tool is suddenly
cheap to make. So four days in, I had Claude build a <a href="https://github.com/realJohnDoe/meridian/tree/main/src/debug" rel="nofollow">debugger</a>: a page that
shows how a YAML file becomes repeat patterns, how those patterns expand into
occurrences, and what happens to the file when you cancel or move one. It was genuinely
useful for about a week, while I chased the worst of the recurrence bugs; afterwards I
half-considered deleting it again.</p> <figure class="post-figure post-figure--wide"><img src="/blog/images/inheritance-debugger.webp" loading="lazy" width="2000" height="954" alt="The inheritance debugger — source YAML on the left, the effective tree in the middle, and the expanded list of occurrences on the right."/> <figcaption>The recurrence debugger: source YAML on the left, its expanded occurrences on the right. Cheap to build, and it turned opaque expansion bugs into something I could just look at.</figcaption></figure> <p>On <strong>2026-06-03</strong> entries gained <a href="https://github.com/realJohnDoe/meridian/commit/48506fb" rel="nofollow">participants</a> — you tag people
on an entry, and later you can filter the whole calendar down to one person. This is the
shared-family-calendar idea from the very beginning finally showing up in the app:
everyone on the same kitchen calendar, no accounts required.</p> <p>On <strong>2026-06-11</strong> entries stopped living only on my laptop: <a href="https://github.com/realJohnDoe/meridian/commit/0057d2a" rel="nofollow">GitHub became a storage backend</a>,
followed within days by auto-sync, conflict detection, and a vault switcher.</p> <p>On <strong>2026-06-16</strong> the description field <a href="https://github.com/realJohnDoe/meridian/commit/4e7b9f1" rel="nofollow">became a real editor</a> — <a href="https://codemirror.net/" rel="nofollow">CodeMirror 6</a>, with wikilinks rendering as inline chips and
checkboxes you can actually click.</p> <p>None of this came from a master plan, but none of it fell from the sky either. Some of
it I’d been carrying since idea-craft — I already knew I wanted GitHub as a backend, and
I’d run into CodeMirror before. The pieces clicked into place one after another as the
small premise turned out to ask for them: files you can read want a recurrence engine you
can debug; files you sync want conflict handling; Markdown you edit by hand wants a real
editor.</p> <h2>Everything is a list</h2> <p>By late June the app worked, and I had a naming decision to make.</p> <p>I had wikilinks. I had tags implemented <em>as</em> wikilinks, which is how I got my first-class
tags. And I had a backlinks panel on every entry. Then the questions started. A
wikilink-as-tag matters more than a wikilink buried in a paragraph — should both appear in
backlinks? Should they look different? Do they need separate sections?</p> <p>And underneath those, a harder one: most people have never heard of a backlink — or a
wikilink, for that matter. I was about to ship an app whose central concepts needed a
glossary.</p> <p>So on <strong>2026-06-20</strong> I removed vocabulary rather than adding it, and inverted the links
while I was at it. The old <code>topics</code> field had each entry point <em>up</em> to the categories it
belonged to; the new <a href="https://github.com/realJohnDoe/meridian/commit/d6d9f39" rel="nofollow"><code>items</code> field</a> has each entry
point <em>down</em> to the entries beneath it. So an entry now simply shows its items, plus a <em>listed on</em> row for the lists it appears on — and the whole model collapsed into one
sentence: <strong>every entry is a list</strong>.</p> <table><thead><tr><th>Entry</th><th>Is a list with…</th><th>Its items are usually…</th></tr></thead><tbody><tr><td><strong>Task</strong></td><td>a <code>done</code> property</td><td>subtasks</td></tr><tr><td><strong>Project</strong></td><td>a <code>done</code> property</td><td>tasks</td></tr><tr><td><strong>Event</strong></td><td>a <code>date</code>, plus optional <code>time</code> and <code>duration</code></td><td>agenda points or follow-ups</td></tr><tr><td><strong>Tag</strong></td><td>—</td><td>everything tagged with it</td></tr><tr><td><strong>Note</strong></td><td>no special properties</td><td>related entries</td></tr></tbody></table> <p>A project is a task whose items are tasks. A tag is simply a list of everything filed
under it. A backlink is just “the lists this appears on” — a phrase that needs no
explanation, because everyone has used a list.</p> <p>I do find that elegant, but elegance isn’t the main point. The main point is that you
never have to answer “is this a task, a subtask, or a project?” The only question left is <em>do I want to track whether this is done?</em> — which is a question you can actually answer.</p> <figure class="post-figure post-figure--phone"><img src="/blog/images/entry-editor-listed-on.png" loading="lazy" width="736" height="1395" alt="An entry open in Meridian's editor, with a listed-on row near the top and an items section at the bottom."/> <figcaption>An entry in the editor: the <strong>listed on</strong> row shows the lists it appears on; the <strong>items</strong> section at the bottom shows what it lists.</figcaption></figure> <p>An entry can also sit on several lists at once, and that makes possible something I use
constantly. We keep a list called <strong>This Week</strong> for things we want to finish this week
but don’t want to pin to a day yet. “Pizza” sits on <em>This Week</em> and on <em>Cooking</em> at the
same time. A strict hierarchy can’t do that — Pizza would have to live in one place. Tags
always could, which is exactly why I loved them and wanted them to be first-class; in
Meridian, lists do the same job.</p> <p>None of this is really the pitch. The pitch is the promise on the surface: tasks and
calendar in one app, stored as Markdown, with flexible hierarchies and flexible
recurrence. “Everything is a list” is just how I ended up building the flexible-hierarchy
part — the rest would work without it. I didn’t design it up front either; I backed into
it while trying to keep the app simple to explain.</p> <h2>The part I don’t put on the landing page</h2> <p>A data model clicking into place is the fun part — and, conveniently, the part that fits
in a blog post. The rest of that summer was the other kind of work: making it reliable
enough to actually use day to day.</p> <p>First the files needed to live somewhere I could reach from any device. I started with
GitHub and fine-grained access tokens — you paste a token, and Meridian reads and writes a
repository you own — because the readers I care about first are developers, and they
already have a GitHub account they trust. (Pasting a token is a pain on a phone, so I later
added one small, stateless Cloudflare Worker that trades OAuth tokens, turning setup into a
single <em>connect</em> click.) Finding a backend at all was harder than I expected: I wanted a
password-protected folder in the cloud with an API, and most options either want access to <em>everything</em> in your account or don’t send the CORS headers a browser app needs. I
compared the candidates in <a href="https://github.com/realJohnDoe/meridian/blob/main/plans/storage-backend-survey.md" rel="nofollow">plans/storage-backend-survey.md</a>;
Dropbox and OneDrive are the strongest alternatives, and I may add them.</p> <p>The recurrence engine was where readable files paid off most. When it misbehaved —
occurrences that wouldn’t move, cancellations that didn’t stick, a series that expanded
one day too far — I could open the offending <code>.md</code>, read exactly what it claimed, and tell
Claude “here’s what it does, here’s what it should do.” Against a file you can read, most
of those bugs turned mechanical.</p> <p>The layers were a different kind of trouble. Between a keystroke and a file on GitHub
there are now four of them — the UI, a React store (Zustand), an on-device cache
(Dexie/IndexedDB), and the storage backend — and each is a fresh chance for them to
quietly disagree. Readable files didn’t help much there; those bugs I chased the ordinary
way, from a bug report down to a root cause, with Claude reading through the code until it
found what had actually fallen out of sync. (One file per concept does help here too: two
devices only collide when they edit <em>the same entry</em>, so a conflict affects one entry
instead of the whole calendar.)</p> <p>I won’t pretend it’s finished. I’ve used Meridian for my own tasks for about two months
now, and my wife is just starting to keep hers in it; we haven’t moved the family calendar
off Proton yet. The most useful missing piece is probably iCal import — until you can pull
an existing calendar in, switching means retyping it, which is a lot to ask. Most of the
recent work has been the unshowy kind, spread across sync, layout, and UX, plus enough
performance work to keep the calendar smooth on a phone as a vault fills up. That polish is
most of the distance between a prototype that works in a demo and something you’d rely on.</p> <h2>Where it fits</h2> <p>It is not a better note-taking app than Obsidian, and it isn’t trying to be. Obsidian’s
plugin ecosystem and linking depth are hard to beat. Meridian borrows the idea that
Markdown is the source of truth and pushes it the other way — into the tasks-and-calendar
territory where Google Calendar and Todoist still win on mobile.</p> <p>One note for the Obsidian crowd, since our audiences overlap: there’s also an Obsidian
theme called <a href="https://github.com/mvahaste/meridian" rel="nofollow">Meridian</a>, by someone else entirely.
Same word, different project — this Meridian is the calendar app.</p> <p>If any of this sounds like the thing you’ve been assembling out of separate apps, try it:
the whole app runs in your browser, with nothing to install and no account. The built-in <a href="https://realjohndoe.github.io/meridian/" rel="nofollow">example vault</a> needs nothing at all; to keep
your own data, you point Meridian at a GitHub repository, or at a local folder in a
Chromium browser (Chrome or Edge on the desktop). Tell me what works and what
doesn’t — the best place for that is a <a href="https://github.com/realJohnDoe/meridian/issues" rel="nofollow">GitHub issue</a> — and the code lives in the <a href="https://github.com/realJohnDoe/meridian" rel="nofollow">same repository</a>.</p>`,1);function Pe(e){var n=He();Ee(102),Se(e,n)}const We=Object.freeze(Object.defineProperty({__proto__:null,default:Pe,metadata:oe},Symbol.toStringTag,{value:"Module"})),Ge=`---
title: "Meridian: Why I built a Markdown-first calendar"
date: 2026-07-23
---

Until a few months ago, my notes, tasks, and appointments were spread across five apps.
Notes lived in [Obsidian](https://obsidian.md). My own tasks lived in the
[TaskNotes](https://tasknotes.dev/) plugin inside Obsidian. Tasks I share with my wife
lived in [Todoist](https://todoist.com). Appointments lived in
[Proton Calendar](https://calendar.proton.me/). Shopping lists lived in
[Google Keep](https://keep.google.com).

None of these apps are bad. What bothered me was the seams between them — and two things
I couldn't fix by switching to a different combination.

The first: I want to keep track of our child's calendar, but she doesn't need a Proton
account. Every system I tried wanted her to _be a user_ before she could _have a
calendar_. I wanted something closer to the paper calendar on the kitchen wall: everyone
writes on it, everyone reads it, nobody owns it. The corporate version of the same
problem shows up at work regularly — a colleague creates a recurring meeting, goes on
vacation, and now nobody can move it.

The second: I wanted tags to be real things. In Obsidian a tag is a label. I wanted a tag
that can have its own description and its own tags.

So I built [Meridian](https://realjohndoe.github.io/meridian/): a calendar, task manager,
and notes app where every entry is a plain Markdown file.

<figure class="post-figure post-figure--phone">
  <img src="/blog/images/agenda-view.png" width="732" height="1411" alt="Meridian's agenda view on a phone, showing scheduled tasks and events grouped by day." />
  <figcaption>The agenda view: scheduled tasks and events on a single timeline.</figcaption>
</figure>

What follows is roughly how that went, from those first ideas to the app I use today.

## What I knew before I wrote any code

A handful of things, and I'd been turning them over for a while. I wanted a Markdown-based
app for notes, tasks, and calendar events, where every entry is a Markdown file with YAML
frontmatter. The important part was a negative: I did _not_ want to model the entity types
explicitly. A thing would be a task because it had a \`done\` field, an event because it had
a \`date\`, a note because it had neither. Type was something you read off the metadata, not
something you declared.

On top of that: \`[[wikilinks]]\` between entries, because links are what turn a collection
of notes into something you can actually navigate; nested tasks shown inline; and tags
that are entries in their own right, not just labels.

These were the ideas I set out with, and I still like them. Most of what came next I
didn't plan.

## A prototype, and a year of not building it

In spring 2025 I built a first prototype called
[idea-craft](https://realjohndoe.github.io/idea-craft/). Then I discovered TaskNotes,
which already did much of what I was sketching, and did the sensible thing: I stopped
building and used it for a year instead.

That year turned out to be important groundwork. It taught me two things I couldn't have
reasoned my way to from a blank page.

**Mobile is where this is decided.** Obsidian is excellent on the desktop, but I use these
tools mostly on a phone. TaskNotes does a good job there — the limit isn't the plugin, it's
that a plugin has to work through Obsidian's own interface. Small things end up taking a
couple of taps more than they would in [Google Calendar](https://calendar.google.com) or
Todoist, and those taps add up when you're capturing something quickly. That gap is the
biggest single reason I eventually built something of my own.

**Recurrence has to stay readable.** iCal ([RFC 5545](https://datatracker.ietf.org/doc/html/rfc5545))
is the standard, and it's capable — my whole calendar could probably be encoded as its
\`RRULE\`, \`RDATE\`, and \`EXDATE\` strings. But those strings are built for machines:
\`FREQ=MONTHLY;BYDAY=1FR,2FR\` is no fun to hand-edit, and the messy real cases only get
worse. Since the point was files you can read, I wanted recurrence I could read too. (If
iCal compatibility ever matters, I can add it underneath.)

## A hundred versions on a phone

For a moment I considered not building an app at all — just proposing my recurrence format
to TaskNotes and staying in Obsidian. But everything I really wanted to fix, from the
mobile UX to a shared calendar without accounts, lived outside the file format, where a
plugin couldn't reach.

So this spring I started over on my phone, in a single very long chat session with
[Claude](https://claude.ai) — which turned out to be good enough at spinning up working
web prototypes that I could design by using, not just by sketching. I built one I called
**plaintext-os** and iterated on it something like a hundred times — most of those on one
question, what the frontmatter should actually look like, and the rest on making it
usable. Somewhere in the middle it got the name Meridian.

It worked. That was the problem. It worked well enough to show me the real version of the
app — and that a single generated file, growing with every change, wasn't a foundation I
could keep building on.

<figure class="post-figure post-figure--phone">
  <img src="/blog/images/plaintext-os-prototype.png" loading="lazy" width="655" height="1391" alt="An early mobile prototype of the app — an agenda list of standups and tasks in a dark theme." />
  <figcaption>An early version from that chat, by then already called Meridian — one of about a hundred iterations built on my phone.</figcaption>
</figure>

On **2026-05-22** I moved to a desktop, set the prototype aside, and started a proper
repository: React, TypeScript, Tailwind, shadcn/ui, Vite. The first day's commits
scaffold the app, wire up GitHub Pages, and
[turn it into a PWA](https://github.com/realJohnDoe/meridian/commit/a23d5ab) — a
progressive web app rather than native ones: I need to support both iOS and Android, and a
single PWA is far less to maintain than two native apps.

_(How that rewrite actually went — and what two months of building this way taught me —
is its own story, and its own article.)_

## Then the "simple" idea started growing

Here's the part I want to be honest about, because it's the real shape of the project.

One thing AI changes about building software is that a throwaway dev tool is suddenly
cheap to make. So four days in, I had Claude build a
[debugger](https://github.com/realJohnDoe/meridian/tree/main/src/debug): a page that
shows how a YAML file becomes repeat patterns, how those patterns expand into
occurrences, and what happens to the file when you cancel or move one. It was genuinely
useful for about a week, while I chased the worst of the recurrence bugs; afterwards I
half-considered deleting it again.

<figure class="post-figure post-figure--wide">
  <img src="/blog/images/inheritance-debugger.webp" loading="lazy" width="2000" height="954" alt="The inheritance debugger — source YAML on the left, the effective tree in the middle, and the expanded list of occurrences on the right." />
  <figcaption>The recurrence debugger: source YAML on the left, its expanded occurrences on the right. Cheap to build, and it turned opaque expansion bugs into something I could just look at.</figcaption>
</figure>

On **2026-06-03** entries gained
[participants](https://github.com/realJohnDoe/meridian/commit/48506fb) — you tag people
on an entry, and later you can filter the whole calendar down to one person. This is the
shared-family-calendar idea from the very beginning finally showing up in the app:
everyone on the same kitchen calendar, no accounts required.

On **2026-06-11** entries stopped living only on my laptop:
[GitHub became a storage backend](https://github.com/realJohnDoe/meridian/commit/0057d2a),
followed within days by auto-sync, conflict detection, and a vault switcher.

On **2026-06-16** the description field
[became a real editor](https://github.com/realJohnDoe/meridian/commit/4e7b9f1) —
[CodeMirror 6](https://codemirror.net/), with wikilinks rendering as inline chips and
checkboxes you can actually click.

None of this came from a master plan, but none of it fell from the sky either. Some of
it I'd been carrying since idea-craft — I already knew I wanted GitHub as a backend, and
I'd run into CodeMirror before. The pieces clicked into place one after another as the
small premise turned out to ask for them: files you can read want a recurrence engine you
can debug; files you sync want conflict handling; Markdown you edit by hand wants a real
editor.

## Everything is a list

By late June the app worked, and I had a naming decision to make.

I had wikilinks. I had tags implemented _as_ wikilinks, which is how I got my first-class
tags. And I had a backlinks panel on every entry. Then the questions started. A
wikilink-as-tag matters more than a wikilink buried in a paragraph — should both appear in
backlinks? Should they look different? Do they need separate sections?

And underneath those, a harder one: most people have never heard of a backlink — or a
wikilink, for that matter. I was about to ship an app whose central concepts needed a
glossary.

So on **2026-06-20** I removed vocabulary rather than adding it, and inverted the links
while I was at it. The old \`topics\` field had each entry point _up_ to the categories it
belonged to; the new
[\`items\` field](https://github.com/realJohnDoe/meridian/commit/d6d9f39) has each entry
point _down_ to the entries beneath it. So an entry now simply shows its items, plus a
_listed on_ row for the lists it appears on — and the whole model collapsed into one
sentence: **every entry is a list**.

| Entry       | Is a list with…                               | Its items are usually…      |
| ----------- | --------------------------------------------- | --------------------------- |
| **Task**    | a \`done\` property                             | subtasks                    |
| **Project** | a \`done\` property                             | tasks                       |
| **Event**   | a \`date\`, plus optional \`time\` and \`duration\` | agenda points or follow-ups |
| **Tag**     | —                                             | everything tagged with it   |
| **Note**    | no special properties                         | related entries             |

A project is a task whose items are tasks. A tag is simply a list of everything filed
under it. A backlink is just "the lists this appears on" — a phrase that needs no
explanation, because everyone has used a list.

I do find that elegant, but elegance isn't the main point. The main point is that you
never have to answer "is this a task, a subtask, or a project?" The only question left is
_do I want to track whether this is done?_ — which is a question you can actually answer.

<figure class="post-figure post-figure--phone">
  <img src="/blog/images/entry-editor-listed-on.png" loading="lazy" width="736" height="1395" alt="An entry open in Meridian's editor, with a listed-on row near the top and an items section at the bottom." />
  <figcaption>An entry in the editor: the <strong>listed on</strong> row shows the lists it appears on; the <strong>items</strong> section at the bottom shows what it lists.</figcaption>
</figure>

An entry can also sit on several lists at once, and that makes possible something I use
constantly. We keep a list called **This Week** for things we want to finish this week
but don't want to pin to a day yet. "Pizza" sits on _This Week_ and on _Cooking_ at the
same time. A strict hierarchy can't do that — Pizza would have to live in one place. Tags
always could, which is exactly why I loved them and wanted them to be first-class; in
Meridian, lists do the same job.

None of this is really the pitch. The pitch is the promise on the surface: tasks and
calendar in one app, stored as Markdown, with flexible hierarchies and flexible
recurrence. "Everything is a list" is just how I ended up building the flexible-hierarchy
part — the rest would work without it. I didn't design it up front either; I backed into
it while trying to keep the app simple to explain.

## The part I don't put on the landing page

A data model clicking into place is the fun part — and, conveniently, the part that fits
in a blog post. The rest of that summer was the other kind of work: making it reliable
enough to actually use day to day.

First the files needed to live somewhere I could reach from any device. I started with
GitHub and fine-grained access tokens — you paste a token, and Meridian reads and writes a
repository you own — because the readers I care about first are developers, and they
already have a GitHub account they trust. (Pasting a token is a pain on a phone, so I later
added one small, stateless Cloudflare Worker that trades OAuth tokens, turning setup into a
single _connect_ click.) Finding a backend at all was harder than I expected: I wanted a
password-protected folder in the cloud with an API, and most options either want access to
_everything_ in your account or don't send the CORS headers a browser app needs. I
compared the candidates in
[plans/storage-backend-survey.md](https://github.com/realJohnDoe/meridian/blob/main/plans/storage-backend-survey.md);
Dropbox and OneDrive are the strongest alternatives, and I may add them.

The recurrence engine was where readable files paid off most. When it misbehaved —
occurrences that wouldn't move, cancellations that didn't stick, a series that expanded
one day too far — I could open the offending \`.md\`, read exactly what it claimed, and tell
Claude "here's what it does, here's what it should do." Against a file you can read, most
of those bugs turned mechanical.

The layers were a different kind of trouble. Between a keystroke and a file on GitHub
there are now four of them — the UI, a React store (Zustand), an on-device cache
(Dexie/IndexedDB), and the storage backend — and each is a fresh chance for them to
quietly disagree. Readable files didn't help much there; those bugs I chased the ordinary
way, from a bug report down to a root cause, with Claude reading through the code until it
found what had actually fallen out of sync. (One file per concept does help here too: two
devices only collide when they edit _the same entry_, so a conflict affects one entry
instead of the whole calendar.)

I won't pretend it's finished. I've used Meridian for my own tasks for about two months
now, and my wife is just starting to keep hers in it; we haven't moved the family calendar
off Proton yet. The most useful missing piece is probably iCal import — until you can pull
an existing calendar in, switching means retyping it, which is a lot to ask. Most of the
recent work has been the unshowy kind, spread across sync, layout, and UX, plus enough
performance work to keep the calendar smooth on a phone as a vault fills up. That polish is
most of the distance between a prototype that works in a demo and something you'd rely on.

## Where it fits

It is not a better note-taking app than Obsidian, and it isn't trying to be. Obsidian's
plugin ecosystem and linking depth are hard to beat. Meridian borrows the idea that
Markdown is the source of truth and pushes it the other way — into the tasks-and-calendar
territory where Google Calendar and Todoist still win on mobile.

One note for the Obsidian crowd, since our audiences overlap: there's also an Obsidian
theme called [Meridian](https://github.com/mvahaste/meridian), by someone else entirely.
Same word, different project — this Meridian is the calendar app.

If any of this sounds like the thing you've been assembling out of separate apps, try it:
the whole app runs in your browser, with nothing to install and no account. The built-in
[example vault](https://realjohndoe.github.io/meridian/) needs nothing at all; to keep
your own data, you point Meridian at a GitHub repository, or at a local folder in a
Chromium browser (Chrome or Edge on the desktop). Tell me what works and what
doesn't — the best place for that is a
[GitHub issue](https://github.com/realJohnDoe/meridian/issues) — and the code lives in the
[same repository](https://github.com/realJohnDoe/meridian).
`,ze=Object.assign({"/src/posts/meridian-why-i-built-a-markdown-first-calendar.md":We}),Fe=Object.assign({"/src/posts/meridian-why-i-built-a-markdown-first-calendar.md":Ge}),Je=200;function qe(e){return e.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/,"").replace(/```[\s\S]*?```/g,"").replace(/<[^>]+>/g,"").replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/^[|>#\s-]*$/gm,"").replace(/[*_`]/g,"").trim()}function Ye(e,n=220){const a=e.split(/\r?\n\s*\r?\n/).map(s=>s.replace(/\s+/g," ").trim()).find(s=>s.length>60&&!s.startsWith("#"));return a?a.length<=n?a:a.slice(0,a.lastIndexOf(" ",n)).replace(/[\s,;:.–—-]+$/,"")+"…":""}function Be(e){return e.split("/").pop().replace(/\.md$/,"")}const ie=Object.entries(ze).map(([e,n])=>{const a=qe(Fe[e]??""),s=a.split(/\s+/).filter(Boolean).length;return{component:n.default,meta:{slug:Be(e),title:n.metadata.title,date:new Date(n.metadata.date),tags:n.metadata.tags??[],description:n.metadata.description??Ye(a),readingMinutes:Math.max(1,Math.round(s/Je))}}}).sort((e,n)=>n.meta.date.getTime()-e.meta.date.getTime()),Qe=ie.map(e=>e.meta);function Ke(e){return ie.find(n=>n.meta.slug===e)}function et(e){return e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}export{Ve as e,et as f,Ke as g,Qe as p};
