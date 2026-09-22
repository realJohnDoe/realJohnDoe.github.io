import{o as ln,n as dn,S as hn,i as pn,d as n,a,c as ft,f as i,k as o,e as r,m as s,l}from"./DEB_C3uP.js";import{r as un,s as cn,n as mt}from"./Dbs_ad-e.js";function Mn(d){return(d==null?void 0:d.length)!==void 0?d:Array.from(d)}function _n(d,h){d.d(1),h.delete(d.key)}function Hn(d,h){dn(d,1,1,()=>{h.delete(d.key)})}function Ln(d,h,w,y,x,ke,I,C,Ie,be,b,xe){let m=d.length,c=ke.length,v=m;const M={};for(;v--;)M[d[v].key]=v;const g=[],ve=new Map,_=new Map,T=[];for(v=c;v--;){const p=xe(x,ke,v),f=w(p);let u=I.get(f);u?T.push(()=>u.p(p,h)):(u=be(f,p),u.c()),ve.set(f,g[v]=u),f in M&&_.set(f,Math.abs(v-M[f]))}const Te=new Set,A=new Set;function k(p){ln(p,1),p.m(C,b),I.set(p.key,p),b=p.first,c--}for(;m&&c;){const p=g[c-1],f=d[m-1],u=p.key,O=f.key;p===f?(b=p.first,m--,c--):ve.has(O)?!I.has(u)||Te.has(u)?k(p):A.has(O)?m--:_.get(u)>_.get(O)?(A.add(u),k(p)):(Te.add(O),m--):(Ie(f,I),m--)}for(;m--;){const p=d[m];ve.has(p.key)||Ie(p,I)}for(;c;)k(g[c-1]);return un(T),g}function fn(d){let h,w=`Until a few months ago, my notes, tasks, and appointments were spread across five apps.
Notes lived in <a href="https://obsidian.md" rel="nofollow">Obsidian</a>. My own tasks lived in the
<a href="https://tasknotes.dev/" rel="nofollow">TaskNotes</a> plugin inside Obsidian. Tasks I share with my wife
lived in <a href="https://todoist.com" rel="nofollow">Todoist</a>. Appointments lived in
<a href="https://calendar.proton.me/" rel="nofollow">Proton Calendar</a>. Shopping lists lived in
<a href="https://keep.google.com" rel="nofollow">Google Keep</a>.`,y,x,ke=`None of these apps are bad. What bothered me was the seams between them — and two things
I couldn’t fix by switching to a different combination.`,I,C,Ie=`The first: I want to keep track of our child’s calendar, but she doesn’t need a Proton
account. Every system I tried wanted her to <em>be a user</em> before she could <em>have a
calendar</em>. I wanted something closer to the paper calendar on the kitchen wall: everyone
writes on it, everyone reads it, nobody owns it. The corporate version of the same
problem shows up at work regularly — a colleague creates a recurring meeting, goes on
vacation, and now nobody can move it.`,be,b,xe=`The second: I wanted tags to be real things. In Obsidian a tag is a label. I wanted a tag
that can have its own description and its own tags.`,m,c,v=`So I built <a href="https://realjohndoe.github.io/meridian/" rel="nofollow">Meridian</a>: a calendar, task manager,
and notes app where every entry is a plain Markdown file.`,M,g,ve='<img src="/blog/images/agenda-view.png" width="732" height="1411" alt="Meridian&#39;s agenda view on a phone, showing scheduled tasks and events grouped by day."/> <figcaption>The agenda view: scheduled tasks and events on a single timeline.</figcaption>',_,T,Te="What follows is roughly how that went, from those first ideas to the app I use today.",A,k,p="What I knew before I wrote any code",f,u,O=`A handful of things, and I’d been turning them over for a while. I wanted a Markdown-based
app for notes, tasks, and calendar events, where every entry is a Markdown file with YAML
frontmatter. The important part was a negative: I did <em>not</em> want to model the entity types
explicitly. A thing would be a task because it had a <code>done</code> field, an event because it had
a <code>date</code>, a note because it had neither. Type was something you read off the metadata, not
something you declared.`,Ce,j,wt=`On top of that: <code>[[wikilinks]]</code> between entries, because links are what turn a collection
of notes into something you can actually navigate; nested tasks shown inline; and tags
that are entries in their own right, not just labels.`,Me,S,gt=`These were the ideas I set out with, and I still like them. Most of what came next I
didn’t plan.`,_e,D,yt="A prototype, and a year of not building it",He,R,bt=`In spring 2025 I built a first prototype called
<a href="https://realjohndoe.github.io/idea-craft/" rel="nofollow">idea-craft</a>. Then I discovered TaskNotes,
which already did much of what I was sketching, and did the sensible thing: I stopped
building and used it for a year instead.`,Le,E,vt=`That year turned out to be important groundwork. It taught me two things I couldn’t have
reasoned my way to from a blank page.`,Pe,G,kt=`<strong>Mobile is where this is decided.</strong> Obsidian is excellent on the desktop, but I use these
tools mostly on a phone. TaskNotes does a good job there — the limit isn’t the plugin, it’s
that a plugin has to work through Obsidian’s own interface. Small things end up taking a
couple of taps more than they would in <a href="https://calendar.google.com" rel="nofollow">Google Calendar</a> or
Todoist, and those taps add up when you’re capturing something quickly. That gap is the
biggest single reason I eventually built something of my own.`,Ae,W,It=`<strong>Recurrence has to stay readable.</strong> iCal (<a href="https://datatracker.ietf.org/doc/html/rfc5545" rel="nofollow">RFC 5545</a>)
is the standard, and it’s capable — my whole calendar could probably be encoded as its
<code>RRULE</code>, <code>RDATE</code>, and <code>EXDATE</code> strings. But those strings are built for machines:
<code>FREQ=MONTHLY;BYDAY=1FR,2FR</code> is no fun to hand-edit, and the messy real cases only get
worse. Since the point was files you can read, I wanted recurrence I could read too. (If
iCal compatibility ever matters, I can add it underneath.)`,Oe,q,Tt="A hundred versions on a phone",je,z,xt=`For a moment I considered not building an app at all — just proposing my recurrence format
to TaskNotes and staying in Obsidian. But everything I really wanted to fix, from the
mobile UX to a shared calendar without accounts, lived outside the file format, where a
plugin couldn’t reach.`,Se,N,Ct=`So this spring I started over on my phone, in a single very long chat session with
<a href="https://claude.ai" rel="nofollow">Claude</a> — which turned out to be good enough at spinning up working
web prototypes that I could design by using, not just by sketching. I built one I called
<strong>plaintext-os</strong> and iterated on it something like a hundred times — most of those on one
question, what the frontmatter should actually look like, and the rest on making it
usable. Somewhere in the middle it got the name Meridian.`,De,J,Mt=`It worked. That was the problem. It worked well enough to show me the real version of the
app — and that a single generated file, growing with every change, wasn’t a foundation I
could keep building on.`,Re,H,_t='<img src="/blog/images/plaintext-os-prototype.png" loading="lazy" width="655" height="1391" alt="An early mobile prototype of the app — an agenda list of standups and tasks in a dark theme."/> <figcaption>An early version from that chat, by then already called Meridian — one of about a hundred iterations built on my phone.</figcaption>',Ee,F,Ht=`On <strong>2026-05-22</strong> I moved to a desktop, set the prototype aside, and started a proper
repository: React, TypeScript, Tailwind, shadcn/ui, Vite. The first day’s commits
scaffold the app, wire up GitHub Pages, and
<a href="https://github.com/realJohnDoe/meridian/commit/a23d5ab" rel="nofollow">turn it into a PWA</a> — a
progressive web app rather than native ones: I need to support both iOS and Android, and a
single PWA is far less to maintain than two native apps.`,Ge,U,Lt=`<em>(How that rewrite actually went — and what two months of building this way taught me —
is its own story, and its own article.)</em>`,We,B,Pt="Then the “simple” idea started growing",qe,Y,At="Here’s the part I want to be honest about, because it’s the real shape of the project.",ze,X,Ot=`One thing AI changes about building software is that a throwaway dev tool is suddenly
cheap to make. So four days in, I had Claude build a
<a href="https://github.com/realJohnDoe/meridian/tree/main/src/debug" rel="nofollow">debugger</a>: a page that
shows how a YAML file becomes repeat patterns, how those patterns expand into
occurrences, and what happens to the file when you cancel or move one. It was genuinely
useful for about a week, while I chased the worst of the recurrence bugs; afterwards I
half-considered deleting it again.`,Ne,L,jt='<img src="/blog/images/inheritance-debugger.webp" loading="lazy" width="2000" height="954" alt="The inheritance debugger — source YAML on the left, the effective tree in the middle, and the expanded list of occurrences on the right."/> <figcaption>The recurrence debugger: source YAML on the left, its expanded occurrences on the right. Cheap to build, and it turned opaque expansion bugs into something I could just look at.</figcaption>',Je,Z,St=`On <strong>2026-06-03</strong> entries gained
<a href="https://github.com/realJohnDoe/meridian/commit/48506fb" rel="nofollow">participants</a> — you tag people
on an entry, and later you can filter the whole calendar down to one person. This is the
shared-family-calendar idea from the very beginning finally showing up in the app:
everyone on the same kitchen calendar, no accounts required.`,Fe,$,Dt=`On <strong>2026-06-11</strong> entries stopped living only on my laptop:
<a href="https://github.com/realJohnDoe/meridian/commit/0057d2a" rel="nofollow">GitHub became a storage backend</a>,
followed within days by auto-sync, conflict detection, and a vault switcher.`,Ue,K,Rt=`On <strong>2026-06-16</strong> the description field
<a href="https://github.com/realJohnDoe/meridian/commit/4e7b9f1" rel="nofollow">became a real editor</a> —
<a href="https://codemirror.net/" rel="nofollow">CodeMirror 6</a>, with wikilinks rendering as inline chips and
checkboxes you can actually click.`,Be,Q,Et=`None of this came from a master plan, but none of it fell from the sky either. Some of
it I’d been carrying since idea-craft — I already knew I wanted GitHub as a backend, and
I’d run into CodeMirror before. The pieces clicked into place one after another as the
small premise turned out to ask for them: files you can read want a recurrence engine you
can debug; files you sync want conflict handling; Markdown you edit by hand wants a real
editor.`,Ye,V,Gt="Everything is a list",Xe,ee,Wt="By late June the app worked, and I had a naming decision to make.",Ze,te,qt=`I had wikilinks. I had tags implemented <em>as</em> wikilinks, which is how I got my first-class
tags. And I had a backlinks panel on every entry. Then the questions started. A
wikilink-as-tag matters more than a wikilink buried in a paragraph — should both appear in
backlinks? Should they look different? Do they need separate sections?`,$e,ne,zt=`And underneath those, a harder one: most people have never heard of a backlink — or a
wikilink, for that matter. I was about to ship an app whose central concepts needed a
glossary.`,Ke,ae,Nt=`So on <strong>2026-06-20</strong> I removed vocabulary rather than adding it, and inverted the links
while I was at it. The old <code>topics</code> field had each entry point <em>up</em> to the categories it
belonged to; the new
<a href="https://github.com/realJohnDoe/meridian/commit/d6d9f39" rel="nofollow"><code>items</code> field</a> has each entry
point <em>down</em> to the entries beneath it. So an entry now simply shows its items, plus a
<em>listed on</em> row for the lists it appears on — and the whole model collapsed into one
sentence: <strong>every entry is a list</strong>.`,Qe,ie,Jt="<thead><tr><th>Entry</th> <th>Is a list with…</th> <th>Its items are usually…</th></tr></thead> <tbody><tr><td><strong>Task</strong></td> <td>a <code>done</code> property</td> <td>subtasks</td></tr> <tr><td><strong>Project</strong></td> <td>a <code>done</code> property</td> <td>tasks</td></tr> <tr><td><strong>Event</strong></td> <td>a <code>date</code>, plus optional <code>time</code> and <code>duration</code></td> <td>agenda points or follow-ups</td></tr> <tr><td><strong>Tag</strong></td> <td>—</td> <td>everything tagged with it</td></tr> <tr><td><strong>Note</strong></td> <td>no special properties</td> <td>related entries</td></tr></tbody>",Ve,oe,Ft=`A project is a task whose items are tasks. A tag is simply a list of everything filed
under it. A backlink is just “the lists this appears on” — a phrase that needs no
explanation, because everyone has used a list.`,et,se,Ut=`I do find that elegant, but elegance isn’t the main point. The main point is that you
never have to answer “is this a task, a subtask, or a project?” The only question left is
<em>do I want to track whether this is done?</em> — which is a question you can actually answer.`,tt,P,Bt='<img src="/blog/images/entry-editor-listed-on.png" loading="lazy" width="736" height="1395" alt="An entry open in Meridian&#39;s editor, with a listed-on row near the top and an items section at the bottom."/> <figcaption>An entry in the editor: the <strong>listed on</strong> row shows the lists it appears on; the <strong>items</strong> section at the bottom shows what it lists.</figcaption>',nt,re,Yt=`An entry can also sit on several lists at once, and that makes possible something I use
constantly. We keep a list called <strong>This Week</strong> for things we want to finish this week
but don’t want to pin to a day yet. “Pizza” sits on <em>This Week</em> and on <em>Cooking</em> at the
same time. A strict hierarchy can’t do that — Pizza would have to live in one place. Tags
always could, which is exactly why I loved them and wanted them to be first-class; in
Meridian, lists do the same job.`,at,le,Xt=`None of this is really the pitch. The pitch is the promise on the surface: tasks and
calendar in one app, stored as Markdown, with flexible hierarchies and flexible
recurrence. “Everything is a list” is just how I ended up building the flexible-hierarchy
part — the rest would work without it. I didn’t design it up front either; I backed into
it while trying to keep the app simple to explain.`,it,de,Zt="The part I don’t put on the landing page",ot,he,$t=`A data model clicking into place is the fun part — and, conveniently, the part that fits
in a blog post. The rest of that summer was the other kind of work: making it reliable
enough to actually use day to day.`,st,pe,Kt=`First the files needed to live somewhere I could reach from any device. I started with
GitHub and fine-grained access tokens — you paste a token, and Meridian reads and writes a
repository you own — because the readers I care about first are developers, and they
already have a GitHub account they trust. (Pasting a token is a pain on a phone, so I later
added one small, stateless Cloudflare Worker that trades OAuth tokens, turning setup into a
single <em>connect</em> click.) Finding a backend at all was harder than I expected: I wanted a
password-protected folder in the cloud with an API, and most options either want access to
<em>everything</em> in your account or don’t send the CORS headers a browser app needs. I
compared the candidates in
<a href="https://github.com/realJohnDoe/meridian/blob/main/plans/storage-backend-survey.md" rel="nofollow">plans/storage-backend-survey.md</a>;
Dropbox and OneDrive are the strongest alternatives, and I may add them.`,rt,ue,Qt=`The recurrence engine was where readable files paid off most. When it misbehaved —
occurrences that wouldn’t move, cancellations that didn’t stick, a series that expanded
one day too far — I could open the offending <code>.md</code>, read exactly what it claimed, and tell
Claude “here’s what it does, here’s what it should do.” Against a file you can read, most
of those bugs turned mechanical.`,lt,ce,Vt=`The layers were a different kind of trouble. Between a keystroke and a file on GitHub
there are now four of them — the UI, a React store (Zustand), an on-device cache
(Dexie/IndexedDB), and the storage backend — and each is a fresh chance for them to
quietly disagree. Readable files didn’t help much there; those bugs I chased the ordinary
way, from a bug report down to a root cause, with Claude reading through the code until it
found what had actually fallen out of sync. (One file per concept does help here too: two
devices only collide when they edit <em>the same entry</em>, so a conflict affects one entry
instead of the whole calendar.)`,dt,fe,en=`I won’t pretend it’s finished. I’ve used Meridian for my own tasks for about two months
now, and my wife is just starting to keep hers in it; we haven’t moved the family calendar
off Proton yet. The most useful missing piece is probably iCal import — until you can pull
an existing calendar in, switching means retyping it, which is a lot to ask. Most of the
recent work has been the unshowy kind, spread across sync, layout, and UX, plus enough
performance work to keep the calendar smooth on a phone as a vault fills up. That polish is
most of the distance between a prototype that works in a demo and something you’d rely on.`,ht,me,tn="Where it fits",pt,we,nn=`It is not a better note-taking app than Obsidian, and it isn’t trying to be. Obsidian’s
plugin ecosystem and linking depth are hard to beat. Meridian borrows the idea that
Markdown is the source of truth and pushes it the other way — into the tasks-and-calendar
territory where Google Calendar and Todoist still win on mobile.`,ut,ge,an=`One note for the Obsidian crowd, since our audiences overlap: there’s also an Obsidian
theme called <a href="https://github.com/mvahaste/meridian" rel="nofollow">Meridian</a>, by someone else entirely.
Same word, different project — this Meridian is the calendar app.`,ct,ye,on=`If any of this sounds like the thing you’ve been assembling out of separate apps, try it:
the whole app runs in your browser, with nothing to install and no account. The built-in
<a href="https://realjohndoe.github.io/meridian/" rel="nofollow">example vault</a> needs nothing at all; to keep
your own data, you point Meridian at a GitHub repository, or at a local folder in a
Chromium browser (Chrome or Edge on the desktop). Tell me what works and what
doesn’t — the best place for that is a
<a href="https://github.com/realJohnDoe/meridian/issues" rel="nofollow">GitHub issue</a> — and the code lives in the
<a href="https://github.com/realJohnDoe/meridian" rel="nofollow">same repository</a>.`;return{c(){h=s("p"),h.innerHTML=w,y=l(),x=s("p"),x.textContent=ke,I=l(),C=s("p"),C.innerHTML=Ie,be=l(),b=s("p"),b.textContent=xe,m=l(),c=s("p"),c.innerHTML=v,M=l(),g=s("figure"),g.innerHTML=ve,_=l(),T=s("p"),T.textContent=Te,A=l(),k=s("h2"),k.textContent=p,f=l(),u=s("p"),u.innerHTML=O,Ce=l(),j=s("p"),j.innerHTML=wt,Me=l(),S=s("p"),S.textContent=gt,_e=l(),D=s("h2"),D.textContent=yt,He=l(),R=s("p"),R.innerHTML=bt,Le=l(),E=s("p"),E.textContent=vt,Pe=l(),G=s("p"),G.innerHTML=kt,Ae=l(),W=s("p"),W.innerHTML=It,Oe=l(),q=s("h2"),q.textContent=Tt,je=l(),z=s("p"),z.textContent=xt,Se=l(),N=s("p"),N.innerHTML=Ct,De=l(),J=s("p"),J.textContent=Mt,Re=l(),H=s("figure"),H.innerHTML=_t,Ee=l(),F=s("p"),F.innerHTML=Ht,Ge=l(),U=s("p"),U.innerHTML=Lt,We=l(),B=s("h2"),B.textContent=Pt,qe=l(),Y=s("p"),Y.textContent=At,ze=l(),X=s("p"),X.innerHTML=Ot,Ne=l(),L=s("figure"),L.innerHTML=jt,Je=l(),Z=s("p"),Z.innerHTML=St,Fe=l(),$=s("p"),$.innerHTML=Dt,Ue=l(),K=s("p"),K.innerHTML=Rt,Be=l(),Q=s("p"),Q.textContent=Et,Ye=l(),V=s("h2"),V.textContent=Gt,Xe=l(),ee=s("p"),ee.textContent=Wt,Ze=l(),te=s("p"),te.innerHTML=qt,$e=l(),ne=s("p"),ne.textContent=zt,Ke=l(),ae=s("p"),ae.innerHTML=Nt,Qe=l(),ie=s("table"),ie.innerHTML=Jt,Ve=l(),oe=s("p"),oe.textContent=Ft,et=l(),se=s("p"),se.innerHTML=Ut,tt=l(),P=s("figure"),P.innerHTML=Bt,nt=l(),re=s("p"),re.innerHTML=Yt,at=l(),le=s("p"),le.textContent=Xt,it=l(),de=s("h2"),de.textContent=Zt,ot=l(),he=s("p"),he.textContent=$t,st=l(),pe=s("p"),pe.innerHTML=Kt,rt=l(),ue=s("p"),ue.innerHTML=Qt,lt=l(),ce=s("p"),ce.innerHTML=Vt,dt=l(),fe=s("p"),fe.textContent=en,ht=l(),me=s("h2"),me.textContent=tn,pt=l(),we=s("p"),we.textContent=nn,ut=l(),ge=s("p"),ge.innerHTML=an,ct=l(),ye=s("p"),ye.innerHTML=on,this.h()},l(e){h=i(e,"P",{"data-svelte-h":!0}),o(h)!=="svelte-18peitt"&&(h.innerHTML=w),y=r(e),x=i(e,"P",{"data-svelte-h":!0}),o(x)!=="svelte-yntva0"&&(x.textContent=ke),I=r(e),C=i(e,"P",{"data-svelte-h":!0}),o(C)!=="svelte-1lygart"&&(C.innerHTML=Ie),be=r(e),b=i(e,"P",{"data-svelte-h":!0}),o(b)!=="svelte-bxwrmr"&&(b.textContent=xe),m=r(e),c=i(e,"P",{"data-svelte-h":!0}),o(c)!=="svelte-197rjlh"&&(c.innerHTML=v),M=r(e),g=i(e,"FIGURE",{class:!0,"data-svelte-h":!0}),o(g)!=="svelte-1513cae"&&(g.innerHTML=ve),_=r(e),T=i(e,"P",{"data-svelte-h":!0}),o(T)!=="svelte-4ekctk"&&(T.textContent=Te),A=r(e),k=i(e,"H2",{"data-svelte-h":!0}),o(k)!=="svelte-b3grpg"&&(k.textContent=p),f=r(e),u=i(e,"P",{"data-svelte-h":!0}),o(u)!=="svelte-dmb7hu"&&(u.innerHTML=O),Ce=r(e),j=i(e,"P",{"data-svelte-h":!0}),o(j)!=="svelte-16l788d"&&(j.innerHTML=wt),Me=r(e),S=i(e,"P",{"data-svelte-h":!0}),o(S)!=="svelte-s0jrxs"&&(S.textContent=gt),_e=r(e),D=i(e,"H2",{"data-svelte-h":!0}),o(D)!=="svelte-1pvmk5d"&&(D.textContent=yt),He=r(e),R=i(e,"P",{"data-svelte-h":!0}),o(R)!=="svelte-15h97qo"&&(R.innerHTML=bt),Le=r(e),E=i(e,"P",{"data-svelte-h":!0}),o(E)!=="svelte-z61k8n"&&(E.textContent=vt),Pe=r(e),G=i(e,"P",{"data-svelte-h":!0}),o(G)!=="svelte-1cdhffm"&&(G.innerHTML=kt),Ae=r(e),W=i(e,"P",{"data-svelte-h":!0}),o(W)!=="svelte-pwafq9"&&(W.innerHTML=It),Oe=r(e),q=i(e,"H2",{"data-svelte-h":!0}),o(q)!=="svelte-8hc4ow"&&(q.textContent=Tt),je=r(e),z=i(e,"P",{"data-svelte-h":!0}),o(z)!=="svelte-uc255c"&&(z.textContent=xt),Se=r(e),N=i(e,"P",{"data-svelte-h":!0}),o(N)!=="svelte-z1cxtb"&&(N.innerHTML=Ct),De=r(e),J=i(e,"P",{"data-svelte-h":!0}),o(J)!=="svelte-1n4y4e0"&&(J.textContent=Mt),Re=r(e),H=i(e,"FIGURE",{class:!0,"data-svelte-h":!0}),o(H)!=="svelte-1bu0ob6"&&(H.innerHTML=_t),Ee=r(e),F=i(e,"P",{"data-svelte-h":!0}),o(F)!=="svelte-1k0nduj"&&(F.innerHTML=Ht),Ge=r(e),U=i(e,"P",{"data-svelte-h":!0}),o(U)!=="svelte-1qin4dx"&&(U.innerHTML=Lt),We=r(e),B=i(e,"H2",{"data-svelte-h":!0}),o(B)!=="svelte-1am6zzu"&&(B.textContent=Pt),qe=r(e),Y=i(e,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-lrrptf"&&(Y.textContent=At),ze=r(e),X=i(e,"P",{"data-svelte-h":!0}),o(X)!=="svelte-10pxcd6"&&(X.innerHTML=Ot),Ne=r(e),L=i(e,"FIGURE",{class:!0,"data-svelte-h":!0}),o(L)!=="svelte-hrsd9e"&&(L.innerHTML=jt),Je=r(e),Z=i(e,"P",{"data-svelte-h":!0}),o(Z)!=="svelte-fgvjlj"&&(Z.innerHTML=St),Fe=r(e),$=i(e,"P",{"data-svelte-h":!0}),o($)!=="svelte-1rtk8d5"&&($.innerHTML=Dt),Ue=r(e),K=i(e,"P",{"data-svelte-h":!0}),o(K)!=="svelte-l34f3t"&&(K.innerHTML=Rt),Be=r(e),Q=i(e,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-t2ukgt"&&(Q.textContent=Et),Ye=r(e),V=i(e,"H2",{"data-svelte-h":!0}),o(V)!=="svelte-13ld3xq"&&(V.textContent=Gt),Xe=r(e),ee=i(e,"P",{"data-svelte-h":!0}),o(ee)!=="svelte-1alzad8"&&(ee.textContent=Wt),Ze=r(e),te=i(e,"P",{"data-svelte-h":!0}),o(te)!=="svelte-1es4avl"&&(te.innerHTML=qt),$e=r(e),ne=i(e,"P",{"data-svelte-h":!0}),o(ne)!=="svelte-18mtg2b"&&(ne.textContent=zt),Ke=r(e),ae=i(e,"P",{"data-svelte-h":!0}),o(ae)!=="svelte-1eqni8c"&&(ae.innerHTML=Nt),Qe=r(e),ie=i(e,"TABLE",{"data-svelte-h":!0}),o(ie)!=="svelte-b3lsff"&&(ie.innerHTML=Jt),Ve=r(e),oe=i(e,"P",{"data-svelte-h":!0}),o(oe)!=="svelte-pwt9ng"&&(oe.textContent=Ft),et=r(e),se=i(e,"P",{"data-svelte-h":!0}),o(se)!=="svelte-ov9y1n"&&(se.innerHTML=Ut),tt=r(e),P=i(e,"FIGURE",{class:!0,"data-svelte-h":!0}),o(P)!=="svelte-16izba8"&&(P.innerHTML=Bt),nt=r(e),re=i(e,"P",{"data-svelte-h":!0}),o(re)!=="svelte-1s8227b"&&(re.innerHTML=Yt),at=r(e),le=i(e,"P",{"data-svelte-h":!0}),o(le)!=="svelte-1b8n5r8"&&(le.textContent=Xt),it=r(e),de=i(e,"H2",{"data-svelte-h":!0}),o(de)!=="svelte-f6ddtk"&&(de.textContent=Zt),ot=r(e),he=i(e,"P",{"data-svelte-h":!0}),o(he)!=="svelte-2h596q"&&(he.textContent=$t),st=r(e),pe=i(e,"P",{"data-svelte-h":!0}),o(pe)!=="svelte-eqrzow"&&(pe.innerHTML=Kt),rt=r(e),ue=i(e,"P",{"data-svelte-h":!0}),o(ue)!=="svelte-ljkb2y"&&(ue.innerHTML=Qt),lt=r(e),ce=i(e,"P",{"data-svelte-h":!0}),o(ce)!=="svelte-1dkjbnb"&&(ce.innerHTML=Vt),dt=r(e),fe=i(e,"P",{"data-svelte-h":!0}),o(fe)!=="svelte-12yz3pk"&&(fe.textContent=en),ht=r(e),me=i(e,"H2",{"data-svelte-h":!0}),o(me)!=="svelte-3bd4qu"&&(me.textContent=tn),pt=r(e),we=i(e,"P",{"data-svelte-h":!0}),o(we)!=="svelte-ana10c"&&(we.textContent=nn),ut=r(e),ge=i(e,"P",{"data-svelte-h":!0}),o(ge)!=="svelte-9pdemn"&&(ge.innerHTML=an),ct=r(e),ye=i(e,"P",{"data-svelte-h":!0}),o(ye)!=="svelte-ahs1mn"&&(ye.innerHTML=on),this.h()},h(){ft(g,"class","post-figure post-figure--phone"),ft(H,"class","post-figure post-figure--phone"),ft(L,"class","post-figure post-figure--wide"),ft(P,"class","post-figure post-figure--phone")},m(e,t){a(e,h,t),a(e,y,t),a(e,x,t),a(e,I,t),a(e,C,t),a(e,be,t),a(e,b,t),a(e,m,t),a(e,c,t),a(e,M,t),a(e,g,t),a(e,_,t),a(e,T,t),a(e,A,t),a(e,k,t),a(e,f,t),a(e,u,t),a(e,Ce,t),a(e,j,t),a(e,Me,t),a(e,S,t),a(e,_e,t),a(e,D,t),a(e,He,t),a(e,R,t),a(e,Le,t),a(e,E,t),a(e,Pe,t),a(e,G,t),a(e,Ae,t),a(e,W,t),a(e,Oe,t),a(e,q,t),a(e,je,t),a(e,z,t),a(e,Se,t),a(e,N,t),a(e,De,t),a(e,J,t),a(e,Re,t),a(e,H,t),a(e,Ee,t),a(e,F,t),a(e,Ge,t),a(e,U,t),a(e,We,t),a(e,B,t),a(e,qe,t),a(e,Y,t),a(e,ze,t),a(e,X,t),a(e,Ne,t),a(e,L,t),a(e,Je,t),a(e,Z,t),a(e,Fe,t),a(e,$,t),a(e,Ue,t),a(e,K,t),a(e,Be,t),a(e,Q,t),a(e,Ye,t),a(e,V,t),a(e,Xe,t),a(e,ee,t),a(e,Ze,t),a(e,te,t),a(e,$e,t),a(e,ne,t),a(e,Ke,t),a(e,ae,t),a(e,Qe,t),a(e,ie,t),a(e,Ve,t),a(e,oe,t),a(e,et,t),a(e,se,t),a(e,tt,t),a(e,P,t),a(e,nt,t),a(e,re,t),a(e,at,t),a(e,le,t),a(e,it,t),a(e,de,t),a(e,ot,t),a(e,he,t),a(e,st,t),a(e,pe,t),a(e,rt,t),a(e,ue,t),a(e,lt,t),a(e,ce,t),a(e,dt,t),a(e,fe,t),a(e,ht,t),a(e,me,t),a(e,pt,t),a(e,we,t),a(e,ut,t),a(e,ge,t),a(e,ct,t),a(e,ye,t)},p:mt,i:mt,o:mt,d(e){e&&(n(h),n(y),n(x),n(I),n(C),n(be),n(b),n(m),n(c),n(M),n(g),n(_),n(T),n(A),n(k),n(f),n(u),n(Ce),n(j),n(Me),n(S),n(_e),n(D),n(He),n(R),n(Le),n(E),n(Pe),n(G),n(Ae),n(W),n(Oe),n(q),n(je),n(z),n(Se),n(N),n(De),n(J),n(Re),n(H),n(Ee),n(F),n(Ge),n(U),n(We),n(B),n(qe),n(Y),n(ze),n(X),n(Ne),n(L),n(Je),n(Z),n(Fe),n($),n(Ue),n(K),n(Be),n(Q),n(Ye),n(V),n(Xe),n(ee),n(Ze),n(te),n($e),n(ne),n(Ke),n(ae),n(Qe),n(ie),n(Ve),n(oe),n(et),n(se),n(tt),n(P),n(nt),n(re),n(at),n(le),n(it),n(de),n(ot),n(he),n(st),n(pe),n(rt),n(ue),n(lt),n(ce),n(dt),n(fe),n(ht),n(me),n(pt),n(we),n(ut),n(ge),n(ct),n(ye))}}}const sn={title:"Meridian: Why I built a Markdown-first calendar",date:"2026-07-23T00:00:00.000Z"},{title:Pn,date:An}=sn;class mn extends hn{constructor(h){super(),pn(this,h,null,fn,cn,{})}}const wn=Object.freeze(Object.defineProperty({__proto__:null,default:mn,metadata:sn},Symbol.toStringTag,{value:"Module"})),gn=`---
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
`,yn=Object.assign({"/src/posts/meridian-why-i-built-a-markdown-first-calendar.md":wn}),bn=Object.assign({"/src/posts/meridian-why-i-built-a-markdown-first-calendar.md":gn}),vn=200;function kn(d){return d.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/,"").replace(/```[\s\S]*?```/g,"").replace(/<[^>]+>/g,"").replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/^[|>#\s-]*$/gm,"").replace(/[*_`]/g,"").trim()}function In(d,h=220){const w=d.split(/\r?\n\s*\r?\n/).map(y=>y.replace(/\s+/g," ").trim()).find(y=>y.length>60&&!y.startsWith("#"));return w?w.length<=h?w:w.slice(0,w.lastIndexOf(" ",h)).replace(/[\s,;:.–—-]+$/,"")+"…":""}function Tn(d){return d.split("/").pop().replace(/\.md$/,"")}const rn=Object.entries(yn).map(([d,h])=>{const w=kn(bn[d]??""),y=w.split(/\s+/).filter(Boolean).length;return{component:h.default,meta:{slug:Tn(d),title:h.metadata.title,date:new Date(h.metadata.date),tags:h.metadata.tags??[],description:h.metadata.description??In(w),readingMinutes:Math.max(1,Math.round(y/vn))}}}).sort((d,h)=>h.meta.date.getTime()-d.meta.date.getTime()),On=rn.map(d=>d.meta);function jn(d){return rn.find(h=>h.meta.slug===d)}function Sn(d){return d.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}export{_n as d,Mn as e,Sn as f,jn as g,Hn as o,On as p,Ln as u};
