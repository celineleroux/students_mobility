function(o) {
  for each(var c in o.courses) {
    var e = c.equivalence;
    if (e && e!="CT" && e!="ME" && e!="EC") {
      emit([e, o.host_institution]);
    }
  }
}