# distributedcomputing4executives-website
Website for Distributed Computing 4 Kids (and Executives), fronting the
executive audience. The book is out (July 2026), so the site sells rather
than teases: the hero leads with the Executive Edition, which is only sold
through the direct store on pigscanfly.ca (direct sales keep the customer
relationship), with the standard paperback and the Amazon paperback/Kindle
listings as the other options. It also carries the Spark/Python setup guides
for readers working through part two.

## Keeping in sync with the kids site

The `distributedcomputing4kids-website` repo is the same site fronting the
kids audience. Everything except the audience-facing copy is meant to stay
identical between the two, so a change to one is usually a change to both:

- `assets/css/main.css`, `_layouts/`, `_includes/header.html`, `Gemfile`,
  and `.github/workflows/` are byte-identical -- copy them across verbatim.
- `local_setup.html` and `cloud_setup.html` carry the same technical
  instructions in both repos and deliberately differ only in who the prose
  is addressed to. This site talks to the reader directly and treats the
  kid as the person they may be helping; the kids site does the reverse.
  When the setup steps change, port the change to both; when the voice
  changes, don't.
- `index.html`, `README.md`, `_config.yml` comments, and
  `_includes/footer.html` are audience-specific by design. This site leads
  with the Executive Edition; the kids site leads with the standard
  paperback.

`assets/js/audience.js` is identical in both repos and rewrites the logo and
an inline phrase when the page is served from the
distributedcomputing4executives.com domain, so it depends on `.logo-text`
and `#friends-line` staying put in the markup. (It also looks for
`#audience-line`, which no longer exists in either repo -- the lookup is
null-checked, so it is a harmless no-op.)
