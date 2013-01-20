function(head, req) {
  // !json templates.courses
  // !code lib/mustache.js
  start({"headers":{"Content-Type":"text/html;charset=utf-8"}});
  var data = {
    university: req.query.university,
    courses: []
  };
  var cnum = 0;
  while (row = getRow()) {
    data.courses.push({
	host_inst: row.key[0],
	equivalence: row.key[1],
	code: row.key[2],
	name: row.key[3],
	count: row.value,
	description: row.key[4],
	num: cnum++,	// numero de cours (temporaire)
    });
  }
  return Mustache.to_html(templates.courses, data);
}
