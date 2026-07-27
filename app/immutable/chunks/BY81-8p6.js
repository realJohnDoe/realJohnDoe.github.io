import{S as ln,i as dn,s as hn,n as rt,d as n,b as a,e as st,g as i,l as o,f as r,o as s,m as l}from"./UYSMfmQi.js";import"./IHki7fMi.js";function Tn(d){return(d==null?void 0:d.length)!==void 0?d:Array.from(d)}function pn(d){let h,p=`Until a few months ago, my notes, tasks, and appointments were spread across five apps.
Notes lived in <a href="https://obsidian.md" rel="nofollow">Obsidian</a>. My own tasks lived in the
<a href="https://tasknotes.dev/" rel="nofollow">TaskNotes</a> plugin inside Obsidian. Tasks I share with my wife
lived in <a href="https://todoist.com" rel="nofollow">Todoist</a>. Appointments lived in
<a href="https://calendar.proton.me/" rel="nofollow">Proton Calendar</a>. Shopping lists lived in
<a href="https://keep.google.com" rel="nofollow">Google Keep</a>.`,u,g,lt=`None of these apps are bad. What bothered me was the seams between them — and two things
I couldn’t fix by switching to a different combination.`,he,y,dt=`The first: I want to keep track of our child’s calendar, but she doesn’t need a Proton
account. Every system I tried wanted her to <em>be a user</em> before she could <em>have a
calendar</em>. I wanted something closer to the paper calendar on the kitchen wall: everyone
writes on it, everyone reads it, nobody owns it. The corporate version of the same
problem shows up at work regularly — a colleague creates a recurring meeting, goes on
vacation, and now nobody can move it.`,pe,b,ht=`The second: I wanted tags to be real things. In Obsidian a tag is a label. I wanted a tag
that can have its own description and its own tags.`,ue,v,pt=`So I built <a href="https://realjohndoe.github.io/meridian/" rel="nofollow">Meridian</a>: a calendar, task manager,
and notes app where every entry is a plain Markdown file.`,ce,c,ut='<img src="/blog/images/agenda-view.png" width="732" height="1411" alt="Meridian&#39;s agenda view on a phone, showing scheduled tasks and events grouped by day."/> <figcaption>The agenda view: scheduled tasks and events on a single timeline.</figcaption>',fe,k,ct="What follows is roughly how that went, from those first ideas to the app I use today.",me,I,ft="What I knew before I wrote any code",we,T,mt=`A handful of things, and I’d been turning them over for a while. I wanted a Markdown-based
app for notes, tasks, and calendar events, where every entry is a Markdown file with YAML
frontmatter. The important part was a negative: I did <em>not</em> want to model the entity types
explicitly. A thing would be a task because it had a <code>done</code> field, an event because it had
a <code>date</code>, a note because it had neither. Type was something you read off the metadata, not
something you declared.`,ge,x,wt=`On top of that: <code>[[wikilinks]]</code> between entries, because links are what turn a collection
of notes into something you can actually navigate; nested tasks shown inline; and tags
that are entries in their own right, not just labels.`,ye,C,gt=`These were the ideas I set out with, and I still like them. Most of what came next I
didn’t plan.`,be,M,yt="A prototype, and a year of not building it",ve,_,bt=`In spring 2025 I built a first prototype called
<a href="https://realjohndoe.github.io/idea-craft/" rel="nofollow">idea-craft</a>. Then I discovered TaskNotes,
which already did much of what I was sketching, and did the sensible thing: I stopped
building and used it for a year instead.`,ke,H,vt=`That year turned out to be important groundwork. It taught me two things I couldn’t have
reasoned my way to from a blank page.`,Ie,L,kt=`<strong>Mobile is where this is decided.</strong> Obsidian is excellent on the desktop, but I use these
tools mostly on a phone. TaskNotes does a good job there — the limit isn’t the plugin, it’s
that a plugin has to work through Obsidian’s own interface. Small things end up taking a
couple of taps more than they would in <a href="https://calendar.google.com" rel="nofollow">Google Calendar</a> or
Todoist, and those taps add up when you’re capturing something quickly. That gap is the
biggest single reason I eventually built something of my own.`,Te,P,It=`<strong>Recurrence has to stay readable.</strong> iCal (<a href="https://datatracker.ietf.org/doc/html/rfc5545" rel="nofollow">RFC 5545</a>)
is the standard, and it’s capable — my whole calendar could probably be encoded as its
<code>RRULE</code>, <code>RDATE</code>, and <code>EXDATE</code> strings. But those strings are built for machines:
<code>FREQ=MONTHLY;BYDAY=1FR,2FR</code> is no fun to hand-edit, and the messy real cases only get
worse. Since the point was files you can read, I wanted recurrence I could read too. (If
iCal compatibility ever matters, I can add it underneath.)`,xe,A,Tt="A hundred versions on a phone",Ce,O,xt=`For a moment I considered not building an app at all — just proposing my recurrence format
to TaskNotes and staying in Obsidian. But everything I really wanted to fix, from the
mobile UX to a shared calendar without accounts, lived outside the file format, where a
plugin couldn’t reach.`,Me,j,Ct=`So this spring I started over on my phone, in a single very long chat session with
<a href="https://claude.ai" rel="nofollow">Claude</a> — which turned out to be good enough at spinning up working
web prototypes that I could design by using, not just by sketching. I built one I called
<strong>plaintext-os</strong> and iterated on it something like a hundred times — most of those on one
question, what the frontmatter should actually look like, and the rest on making it
usable. Somewhere in the middle it got the name Meridian.`,_e,D,Mt=`It worked. That was the problem. It worked well enough to show me the real version of the
app — and that a single generated file, growing with every change, wasn’t a foundation I
could keep building on.`,He,f,_t='<img src="/blog/images/plaintext-os-prototype.png" loading="lazy" width="655" height="1391" alt="An early mobile prototype of the app — an agenda list of standups and tasks in a dark theme."/> <figcaption>An early version from that chat, by then already called Meridian — one of about a hundred iterations built on my phone.</figcaption>',Le,S,Ht=`On <strong>2026-05-22</strong> I moved to a desktop, set the prototype aside, and started a proper
repository: React, TypeScript, Tailwind, shadcn/ui, Vite. The first day’s commits
scaffold the app, wire up GitHub Pages, and
<a href="https://github.com/realJohnDoe/meridian/commit/a23d5ab" rel="nofollow">turn it into a PWA</a> — a
progressive web app rather than native ones: I need to support both iOS and Android, and a
single PWA is far less to maintain than two native apps.`,Pe,R,Lt=`<em>(How that rewrite actually went — and what two months of building this way taught me —
is its own story, and its own article.)</em>`,Ae,E,Pt="Then the “simple” idea started growing",Oe,G,At="Here’s the part I want to be honest about, because it’s the real shape of the project.",je,W,Ot=`One thing AI changes about building software is that a throwaway dev tool is suddenly
cheap to make. So four days in, I had Claude build a
<a href="https://github.com/realJohnDoe/meridian/tree/main/src/debug" rel="nofollow">debugger</a>: a page that
shows how a YAML file becomes repeat patterns, how those patterns expand into
occurrences, and what happens to the file when you cancel or move one. It was genuinely
useful for about a week, while I chased the worst of the recurrence bugs; afterwards I
half-considered deleting it again.`,De,m,jt='<img src="/blog/images/inheritance-debugger.webp" loading="lazy" width="2000" height="954" alt="The inheritance debugger — source YAML on the left, the effective tree in the middle, and the expanded list of occurrences on the right."/> <figcaption>The recurrence debugger: source YAML on the left, its expanded occurrences on the right. Cheap to build, and it turned opaque expansion bugs into something I could just look at.</figcaption>',Se,q,Dt=`On <strong>2026-06-03</strong> entries gained
<a href="https://github.com/realJohnDoe/meridian/commit/48506fb" rel="nofollow">participants</a> — you tag people
on an entry, and later you can filter the whole calendar down to one person. This is the
shared-family-calendar idea from the very beginning finally showing up in the app:
everyone on the same kitchen calendar, no accounts required.`,Re,z,St=`On <strong>2026-06-11</strong> entries stopped living only on my laptop:
<a href="https://github.com/realJohnDoe/meridian/commit/0057d2a" rel="nofollow">GitHub became a storage backend</a>,
followed within days by auto-sync, conflict detection, and a vault switcher.`,Ee,N,Rt=`On <strong>2026-06-16</strong> the description field
<a href="https://github.com/realJohnDoe/meridian/commit/4e7b9f1" rel="nofollow">became a real editor</a> —
<a href="https://codemirror.net/" rel="nofollow">CodeMirror 6</a>, with wikilinks rendering as inline chips and
checkboxes you can actually click.`,Ge,J,Et=`None of this came from a master plan, but none of it fell from the sky either. Some of
it I’d been carrying since idea-craft — I already knew I wanted GitHub as a backend, and
I’d run into CodeMirror before. The pieces clicked into place one after another as the
small premise turned out to ask for them: files you can read want a recurrence engine you
can debug; files you sync want conflict handling; Markdown you edit by hand wants a real
editor.`,We,F,Gt="Everything is a list",qe,U,Wt="By late June the app worked, and I had a naming decision to make.",ze,B,qt=`I had wikilinks. I had tags implemented <em>as</em> wikilinks, which is how I got my first-class
tags. And I had a backlinks panel on every entry. Then the questions started. A
wikilink-as-tag matters more than a wikilink buried in a paragraph — should both appear in
backlinks? Should they look different? Do they need separate sections?`,Ne,Y,zt=`And underneath those, a harder one: most people have never heard of a backlink — or a
wikilink, for that matter. I was about to ship an app whose central concepts needed a
glossary.`,Je,X,Nt=`So on <strong>2026-06-20</strong> I removed vocabulary rather than adding it, and inverted the links
while I was at it. The old <code>topics</code> field had each entry point <em>up</em> to the categories it
belonged to; the new
<a href="https://github.com/realJohnDoe/meridian/commit/d6d9f39" rel="nofollow"><code>items</code> field</a> has each entry
point <em>down</em> to the entries beneath it. So an entry now simply shows its items, plus a
<em>listed on</em> row for the lists it appears on — and the whole model collapsed into one
sentence: <strong>every entry is a list</strong>.`,Fe,Z,Jt="<thead><tr><th>Entry</th> <th>Is a list with…</th> <th>Its items are usually…</th></tr></thead> <tbody><tr><td><strong>Task</strong></td> <td>a <code>done</code> property</td> <td>subtasks</td></tr> <tr><td><strong>Project</strong></td> <td>a <code>done</code> property</td> <td>tasks</td></tr> <tr><td><strong>Event</strong></td> <td>a <code>date</code>, plus optional <code>time</code> and <code>duration</code></td> <td>agenda points or follow-ups</td></tr> <tr><td><strong>Tag</strong></td> <td>—</td> <td>everything tagged with it</td></tr> <tr><td><strong>Note</strong></td> <td>no special properties</td> <td>related entries</td></tr></tbody>",Ue,w,Ft='<img src="/blog/images/entry-editor-listed-on.png" loading="lazy" width="736" height="1395" alt="An entry open in Meridian&#39;s editor, with a listed-on row near the top and an items section at the bottom."/> <figcaption>An entry in the editor: the <strong>listed on</strong> row shows the lists it appears on; the <strong>items</strong> section at the bottom shows what it lists.</figcaption>',Be,$,Ut=`A project is a task whose items are tasks. A tag is simply a list of everything filed
under it. A backlink is just “the lists this appears on” — a phrase that needs no
explanation, because everyone has used a list.`,Ye,K,Bt=`I do find that elegant, but elegance isn’t the main point. The main point is that you
never have to answer “is this a task, a subtask, or a project?” The only question left is
<em>do I want to track whether this is done?</em> — which is a question you can actually answer.`,Xe,Q,Yt=`An entry can also sit on several lists at once, and that makes possible something I use
constantly. We keep a list called <strong>This Week</strong> for things we want to finish this week
but don’t want to pin to a day yet. “Pizza” sits on <em>This Week</em> and on <em>Cooking</em> at the
same time. A strict hierarchy can’t do that — Pizza would have to live in one place. Tags
always could, which is exactly why I loved them and wanted them to be first-class; in
Meridian, lists do the same job.`,Ze,V,Xt=`None of this is really the pitch. The pitch is the promise on the surface: tasks and
calendar in one app, stored as Markdown, with flexible hierarchies and flexible
recurrence. “Everything is a list” is just how I ended up building the flexible-hierarchy
part — the rest would work without it. I didn’t design it up front either; I backed into
it while trying to keep the app simple to explain.`,$e,ee,Zt="The part I don’t put on the landing page",Ke,te,$t=`A data model clicking into place is the fun part — and, conveniently, the part that fits
in a blog post. The rest of that summer was the other kind of work: making it reliable
enough to actually use day to day.`,Qe,ne,Kt=`First the files needed to live somewhere I could reach from any device. I started with
GitHub and fine-grained access tokens — you paste a token, and Meridian reads and writes a
repository you own — because the readers I care about first are developers, and they
already have a GitHub account they trust. (Pasting a token is a pain on a phone, so I later
added one small, stateless Cloudflare Worker that trades OAuth tokens, turning setup into a
single <em>connect</em> click.) Finding a backend at all was harder than I expected: I wanted a
password-protected folder in the cloud with an API, and most options either want access to
<em>everything</em> in your account or don’t send the CORS headers a browser app needs. I
compared the candidates in
<a href="https://github.com/realJohnDoe/meridian/blob/main/plans/storage-backend-survey.md" rel="nofollow">plans/storage-backend-survey.md</a>;
Dropbox and OneDrive are the strongest alternatives, and I may add them.`,Ve,ae,Qt=`The recurrence engine was where readable files paid off most. When it misbehaved —
occurrences that wouldn’t move, cancellations that didn’t stick, a series that expanded
one day too far — I could open the offending <code>.md</code>, read exactly what it claimed, and tell
Claude “here’s what it does, here’s what it should do.” Against a file you can read, most
of those bugs turned mechanical.`,et,ie,Vt=`The layers were a different kind of trouble. Between a keystroke and a file on GitHub
there are now four of them — the UI, a React store (Zustand), an on-device cache
(Dexie/IndexedDB), and the storage backend — and each is a fresh chance for them to
quietly disagree. Readable files didn’t help much there; those bugs I chased the ordinary
way, from a bug report down to a root cause, with Claude reading through the code until it
found what had actually fallen out of sync. (One file per concept does help here too: two
devices only collide when they edit <em>the same entry</em>, so a conflict affects one entry
instead of the whole calendar.)`,tt,oe,en=`I won’t pretend it’s finished. I’ve used Meridian for my own tasks for about two months
now, and my wife is just starting to keep hers in it; we haven’t moved the family calendar
off Proton yet. The most useful missing piece is probably iCal import — until you can pull
an existing calendar in, switching means retyping it, which is a lot to ask. Most of the
recent work has been the unshowy kind, spread across sync, layout, and UX, plus enough
performance work to keep the calendar smooth on a phone as a vault fills up. That polish is
most of the distance between a prototype that works in a demo and something you’d rely on.`,nt,se,tn="Where it fits",at,re,nn=`It is not a better note-taking app than Obsidian, and it isn’t trying to be. Obsidian’s
plugin ecosystem and linking depth are hard to beat. Meridian borrows the idea that
Markdown is the source of truth and pushes it the other way — into the tasks-and-calendar
territory where Google Calendar and Todoist still win on mobile.`,it,le,an=`One note for the Obsidian crowd, since our audiences overlap: there’s also an Obsidian
theme called <a href="https://github.com/mvahaste/meridian" rel="nofollow">Meridian</a>, by someone else entirely.
Same word, different project — this Meridian is the calendar app.`,ot,de,on=`If any of this sounds like the thing you’ve been assembling out of separate apps, try it:
the whole app runs in your browser, with nothing to install and no account. The built-in
<a href="https://realjohndoe.github.io/meridian/" rel="nofollow">example vault</a> needs nothing at all; to keep
your own data, you point Meridian at a GitHub repository, or at a local folder in a
Chromium browser (Chrome or Edge on the desktop). Tell me what works and what
doesn’t — the best place for that is a
<a href="https://github.com/realJohnDoe/meridian/issues" rel="nofollow">GitHub issue</a> — and the code lives in the
<a href="https://github.com/realJohnDoe/meridian" rel="nofollow">same repository</a>.`;return{c(){h=s("p"),h.innerHTML=p,u=l(),g=s("p"),g.textContent=lt,he=l(),y=s("p"),y.innerHTML=dt,pe=l(),b=s("p"),b.textContent=ht,ue=l(),v=s("p"),v.innerHTML=pt,ce=l(),c=s("figure"),c.innerHTML=ut,fe=l(),k=s("p"),k.textContent=ct,me=l(),I=s("h2"),I.textContent=ft,we=l(),T=s("p"),T.innerHTML=mt,ge=l(),x=s("p"),x.innerHTML=wt,ye=l(),C=s("p"),C.textContent=gt,be=l(),M=s("h2"),M.textContent=yt,ve=l(),_=s("p"),_.innerHTML=bt,ke=l(),H=s("p"),H.textContent=vt,Ie=l(),L=s("p"),L.innerHTML=kt,Te=l(),P=s("p"),P.innerHTML=It,xe=l(),A=s("h2"),A.textContent=Tt,Ce=l(),O=s("p"),O.textContent=xt,Me=l(),j=s("p"),j.innerHTML=Ct,_e=l(),D=s("p"),D.textContent=Mt,He=l(),f=s("figure"),f.innerHTML=_t,Le=l(),S=s("p"),S.innerHTML=Ht,Pe=l(),R=s("p"),R.innerHTML=Lt,Ae=l(),E=s("h2"),E.textContent=Pt,Oe=l(),G=s("p"),G.textContent=At,je=l(),W=s("p"),W.innerHTML=Ot,De=l(),m=s("figure"),m.innerHTML=jt,Se=l(),q=s("p"),q.innerHTML=Dt,Re=l(),z=s("p"),z.innerHTML=St,Ee=l(),N=s("p"),N.innerHTML=Rt,Ge=l(),J=s("p"),J.textContent=Et,We=l(),F=s("h2"),F.textContent=Gt,qe=l(),U=s("p"),U.textContent=Wt,ze=l(),B=s("p"),B.innerHTML=qt,Ne=l(),Y=s("p"),Y.textContent=zt,Je=l(),X=s("p"),X.innerHTML=Nt,Fe=l(),Z=s("table"),Z.innerHTML=Jt,Ue=l(),w=s("figure"),w.innerHTML=Ft,Be=l(),$=s("p"),$.textContent=Ut,Ye=l(),K=s("p"),K.innerHTML=Bt,Xe=l(),Q=s("p"),Q.innerHTML=Yt,Ze=l(),V=s("p"),V.textContent=Xt,$e=l(),ee=s("h2"),ee.textContent=Zt,Ke=l(),te=s("p"),te.textContent=$t,Qe=l(),ne=s("p"),ne.innerHTML=Kt,Ve=l(),ae=s("p"),ae.innerHTML=Qt,et=l(),ie=s("p"),ie.innerHTML=Vt,tt=l(),oe=s("p"),oe.textContent=en,nt=l(),se=s("h2"),se.textContent=tn,at=l(),re=s("p"),re.textContent=nn,it=l(),le=s("p"),le.innerHTML=an,ot=l(),de=s("p"),de.innerHTML=on,this.h()},l(e){h=i(e,"P",{"data-svelte-h":!0}),o(h)!=="svelte-18peitt"&&(h.innerHTML=p),u=r(e),g=i(e,"P",{"data-svelte-h":!0}),o(g)!=="svelte-yntva0"&&(g.textContent=lt),he=r(e),y=i(e,"P",{"data-svelte-h":!0}),o(y)!=="svelte-1lygart"&&(y.innerHTML=dt),pe=r(e),b=i(e,"P",{"data-svelte-h":!0}),o(b)!=="svelte-bxwrmr"&&(b.textContent=ht),ue=r(e),v=i(e,"P",{"data-svelte-h":!0}),o(v)!=="svelte-197rjlh"&&(v.innerHTML=pt),ce=r(e),c=i(e,"FIGURE",{class:!0,"data-svelte-h":!0}),o(c)!=="svelte-1513cae"&&(c.innerHTML=ut),fe=r(e),k=i(e,"P",{"data-svelte-h":!0}),o(k)!=="svelte-4ekctk"&&(k.textContent=ct),me=r(e),I=i(e,"H2",{"data-svelte-h":!0}),o(I)!=="svelte-b3grpg"&&(I.textContent=ft),we=r(e),T=i(e,"P",{"data-svelte-h":!0}),o(T)!=="svelte-dmb7hu"&&(T.innerHTML=mt),ge=r(e),x=i(e,"P",{"data-svelte-h":!0}),o(x)!=="svelte-16l788d"&&(x.innerHTML=wt),ye=r(e),C=i(e,"P",{"data-svelte-h":!0}),o(C)!=="svelte-s0jrxs"&&(C.textContent=gt),be=r(e),M=i(e,"H2",{"data-svelte-h":!0}),o(M)!=="svelte-1pvmk5d"&&(M.textContent=yt),ve=r(e),_=i(e,"P",{"data-svelte-h":!0}),o(_)!=="svelte-15h97qo"&&(_.innerHTML=bt),ke=r(e),H=i(e,"P",{"data-svelte-h":!0}),o(H)!=="svelte-z61k8n"&&(H.textContent=vt),Ie=r(e),L=i(e,"P",{"data-svelte-h":!0}),o(L)!=="svelte-1cdhffm"&&(L.innerHTML=kt),Te=r(e),P=i(e,"P",{"data-svelte-h":!0}),o(P)!=="svelte-pwafq9"&&(P.innerHTML=It),xe=r(e),A=i(e,"H2",{"data-svelte-h":!0}),o(A)!=="svelte-8hc4ow"&&(A.textContent=Tt),Ce=r(e),O=i(e,"P",{"data-svelte-h":!0}),o(O)!=="svelte-uc255c"&&(O.textContent=xt),Me=r(e),j=i(e,"P",{"data-svelte-h":!0}),o(j)!=="svelte-z1cxtb"&&(j.innerHTML=Ct),_e=r(e),D=i(e,"P",{"data-svelte-h":!0}),o(D)!=="svelte-1n4y4e0"&&(D.textContent=Mt),He=r(e),f=i(e,"FIGURE",{class:!0,"data-svelte-h":!0}),o(f)!=="svelte-1bu0ob6"&&(f.innerHTML=_t),Le=r(e),S=i(e,"P",{"data-svelte-h":!0}),o(S)!=="svelte-1k0nduj"&&(S.innerHTML=Ht),Pe=r(e),R=i(e,"P",{"data-svelte-h":!0}),o(R)!=="svelte-1qin4dx"&&(R.innerHTML=Lt),Ae=r(e),E=i(e,"H2",{"data-svelte-h":!0}),o(E)!=="svelte-1am6zzu"&&(E.textContent=Pt),Oe=r(e),G=i(e,"P",{"data-svelte-h":!0}),o(G)!=="svelte-lrrptf"&&(G.textContent=At),je=r(e),W=i(e,"P",{"data-svelte-h":!0}),o(W)!=="svelte-10pxcd6"&&(W.innerHTML=Ot),De=r(e),m=i(e,"FIGURE",{class:!0,"data-svelte-h":!0}),o(m)!=="svelte-hrsd9e"&&(m.innerHTML=jt),Se=r(e),q=i(e,"P",{"data-svelte-h":!0}),o(q)!=="svelte-fgvjlj"&&(q.innerHTML=Dt),Re=r(e),z=i(e,"P",{"data-svelte-h":!0}),o(z)!=="svelte-1rtk8d5"&&(z.innerHTML=St),Ee=r(e),N=i(e,"P",{"data-svelte-h":!0}),o(N)!=="svelte-l34f3t"&&(N.innerHTML=Rt),Ge=r(e),J=i(e,"P",{"data-svelte-h":!0}),o(J)!=="svelte-t2ukgt"&&(J.textContent=Et),We=r(e),F=i(e,"H2",{"data-svelte-h":!0}),o(F)!=="svelte-13ld3xq"&&(F.textContent=Gt),qe=r(e),U=i(e,"P",{"data-svelte-h":!0}),o(U)!=="svelte-1alzad8"&&(U.textContent=Wt),ze=r(e),B=i(e,"P",{"data-svelte-h":!0}),o(B)!=="svelte-1es4avl"&&(B.innerHTML=qt),Ne=r(e),Y=i(e,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-18mtg2b"&&(Y.textContent=zt),Je=r(e),X=i(e,"P",{"data-svelte-h":!0}),o(X)!=="svelte-1eqni8c"&&(X.innerHTML=Nt),Fe=r(e),Z=i(e,"TABLE",{"data-svelte-h":!0}),o(Z)!=="svelte-b3lsff"&&(Z.innerHTML=Jt),Ue=r(e),w=i(e,"FIGURE",{class:!0,"data-svelte-h":!0}),o(w)!=="svelte-16izba8"&&(w.innerHTML=Ft),Be=r(e),$=i(e,"P",{"data-svelte-h":!0}),o($)!=="svelte-pwt9ng"&&($.textContent=Ut),Ye=r(e),K=i(e,"P",{"data-svelte-h":!0}),o(K)!=="svelte-ov9y1n"&&(K.innerHTML=Bt),Xe=r(e),Q=i(e,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-1s8227b"&&(Q.innerHTML=Yt),Ze=r(e),V=i(e,"P",{"data-svelte-h":!0}),o(V)!=="svelte-1b8n5r8"&&(V.textContent=Xt),$e=r(e),ee=i(e,"H2",{"data-svelte-h":!0}),o(ee)!=="svelte-f6ddtk"&&(ee.textContent=Zt),Ke=r(e),te=i(e,"P",{"data-svelte-h":!0}),o(te)!=="svelte-2h596q"&&(te.textContent=$t),Qe=r(e),ne=i(e,"P",{"data-svelte-h":!0}),o(ne)!=="svelte-eqrzow"&&(ne.innerHTML=Kt),Ve=r(e),ae=i(e,"P",{"data-svelte-h":!0}),o(ae)!=="svelte-ljkb2y"&&(ae.innerHTML=Qt),et=r(e),ie=i(e,"P",{"data-svelte-h":!0}),o(ie)!=="svelte-1dkjbnb"&&(ie.innerHTML=Vt),tt=r(e),oe=i(e,"P",{"data-svelte-h":!0}),o(oe)!=="svelte-12yz3pk"&&(oe.textContent=en),nt=r(e),se=i(e,"H2",{"data-svelte-h":!0}),o(se)!=="svelte-3bd4qu"&&(se.textContent=tn),at=r(e),re=i(e,"P",{"data-svelte-h":!0}),o(re)!=="svelte-ana10c"&&(re.textContent=nn),it=r(e),le=i(e,"P",{"data-svelte-h":!0}),o(le)!=="svelte-9pdemn"&&(le.innerHTML=an),ot=r(e),de=i(e,"P",{"data-svelte-h":!0}),o(de)!=="svelte-ahs1mn"&&(de.innerHTML=on),this.h()},h(){st(c,"class","post-figure post-figure--phone"),st(f,"class","post-figure post-figure--phone"),st(m,"class","post-figure post-figure--wide"),st(w,"class","post-figure post-figure--phone")},m(e,t){a(e,h,t),a(e,u,t),a(e,g,t),a(e,he,t),a(e,y,t),a(e,pe,t),a(e,b,t),a(e,ue,t),a(e,v,t),a(e,ce,t),a(e,c,t),a(e,fe,t),a(e,k,t),a(e,me,t),a(e,I,t),a(e,we,t),a(e,T,t),a(e,ge,t),a(e,x,t),a(e,ye,t),a(e,C,t),a(e,be,t),a(e,M,t),a(e,ve,t),a(e,_,t),a(e,ke,t),a(e,H,t),a(e,Ie,t),a(e,L,t),a(e,Te,t),a(e,P,t),a(e,xe,t),a(e,A,t),a(e,Ce,t),a(e,O,t),a(e,Me,t),a(e,j,t),a(e,_e,t),a(e,D,t),a(e,He,t),a(e,f,t),a(e,Le,t),a(e,S,t),a(e,Pe,t),a(e,R,t),a(e,Ae,t),a(e,E,t),a(e,Oe,t),a(e,G,t),a(e,je,t),a(e,W,t),a(e,De,t),a(e,m,t),a(e,Se,t),a(e,q,t),a(e,Re,t),a(e,z,t),a(e,Ee,t),a(e,N,t),a(e,Ge,t),a(e,J,t),a(e,We,t),a(e,F,t),a(e,qe,t),a(e,U,t),a(e,ze,t),a(e,B,t),a(e,Ne,t),a(e,Y,t),a(e,Je,t),a(e,X,t),a(e,Fe,t),a(e,Z,t),a(e,Ue,t),a(e,w,t),a(e,Be,t),a(e,$,t),a(e,Ye,t),a(e,K,t),a(e,Xe,t),a(e,Q,t),a(e,Ze,t),a(e,V,t),a(e,$e,t),a(e,ee,t),a(e,Ke,t),a(e,te,t),a(e,Qe,t),a(e,ne,t),a(e,Ve,t),a(e,ae,t),a(e,et,t),a(e,ie,t),a(e,tt,t),a(e,oe,t),a(e,nt,t),a(e,se,t),a(e,at,t),a(e,re,t),a(e,it,t),a(e,le,t),a(e,ot,t),a(e,de,t)},p:rt,i:rt,o:rt,d(e){e&&(n(h),n(u),n(g),n(he),n(y),n(pe),n(b),n(ue),n(v),n(ce),n(c),n(fe),n(k),n(me),n(I),n(we),n(T),n(ge),n(x),n(ye),n(C),n(be),n(M),n(ve),n(_),n(ke),n(H),n(Ie),n(L),n(Te),n(P),n(xe),n(A),n(Ce),n(O),n(Me),n(j),n(_e),n(D),n(He),n(f),n(Le),n(S),n(Pe),n(R),n(Ae),n(E),n(Oe),n(G),n(je),n(W),n(De),n(m),n(Se),n(q),n(Re),n(z),n(Ee),n(N),n(Ge),n(J),n(We),n(F),n(qe),n(U),n(ze),n(B),n(Ne),n(Y),n(Je),n(X),n(Fe),n(Z),n(Ue),n(w),n(Be),n($),n(Ye),n(K),n(Xe),n(Q),n(Ze),n(V),n($e),n(ee),n(Ke),n(te),n(Qe),n(ne),n(Ve),n(ae),n(et),n(ie),n(tt),n(oe),n(nt),n(se),n(at),n(re),n(it),n(le),n(ot),n(de))}}}const sn={title:"Meridian: Why I built a Markdown-first calendar",tags:["product","philosophy","architecture","features"],date:"2026-07-23T00:00:00.000Z"},{title:xn,tags:Cn,date:Mn}=sn;class un extends ln{constructor(h){super(),dn(this,h,null,pn,hn,{})}}const cn=Object.freeze(Object.defineProperty({__proto__:null,default:un,metadata:sn},Symbol.toStringTag,{value:"Module"})),fn=`---
title: "Meridian: Why I built a Markdown-first calendar"
tags: [product, philosophy, architecture, features]
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

<figure class="post-figure post-figure--phone">
  <img src="/blog/images/entry-editor-listed-on.png" loading="lazy" width="736" height="1395" alt="An entry open in Meridian's editor, with a listed-on row near the top and an items section at the bottom." />
  <figcaption>An entry in the editor: the <strong>listed on</strong> row shows the lists it appears on; the <strong>items</strong> section at the bottom shows what it lists.</figcaption>
</figure>

A project is a task whose items are tasks. A tag is simply a list of everything filed
under it. A backlink is just "the lists this appears on" — a phrase that needs no
explanation, because everyone has used a list.

I do find that elegant, but elegance isn't the main point. The main point is that you
never have to answer "is this a task, a subtask, or a project?" The only question left is
_do I want to track whether this is done?_ — which is a question you can actually answer.

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
`,mn=Object.assign({"/src/posts/meridian-why-i-built-a-markdown-first-calendar.md":cn}),wn=Object.assign({"/src/posts/meridian-why-i-built-a-markdown-first-calendar.md":fn}),gn=200;function yn(d){return d.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/,"").replace(/```[\s\S]*?```/g,"").replace(/<[^>]+>/g,"").replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/^[|>#\s-]*$/gm,"").replace(/[*_`]/g,"").trim()}function bn(d,h=220){const p=d.split(/\r?\n\s*\r?\n/).map(u=>u.replace(/\s+/g," ").trim()).find(u=>u.length>60&&!u.startsWith("#"));return p?p.length<=h?p:p.slice(0,p.lastIndexOf(" ",h)).replace(/[\s,;:.–—-]+$/,"")+"…":""}function vn(d){return d.split("/").pop().replace(/\.md$/,"")}const rn=Object.entries(mn).map(([d,h])=>{const p=yn(wn[d]??""),u=p.split(/\s+/).filter(Boolean).length;return{component:h.default,meta:{slug:vn(d),title:h.metadata.title,date:new Date(h.metadata.date),tags:h.metadata.tags??[],description:h.metadata.description??bn(p),readingMinutes:Math.max(1,Math.round(u/gn))}}}).sort((d,h)=>h.meta.date.getTime()-d.meta.date.getTime()),_n=rn.map(d=>d.meta);function Hn(d){return rn.find(h=>h.meta.slug===d)}function Ln(d){return d.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}export{Tn as e,Ln as f,Hn as g,_n as p};
