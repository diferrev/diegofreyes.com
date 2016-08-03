function createCircleSkills(){
    var html = Circles.create({
      id:                  'circles-html',
      radius:              40,
      value:               80,
      text:                '<span class="fa fa-html5"></span>',
      colors:              ['#ec866a', '#e34f26'],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
    });
    var css = Circles.create({
      id:                  'circles-css',
      radius:              40,
      value:               65,
      width:               10,
      text:                '<span class="fa fa-css3"></span>',
      colors:              ['#74b6eb', '#1B73BA'],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
    });
    var wordpress = Circles.create({
      id:                  'circles-wordpress',
      radius:              40,
      value:               60,
      width:               10,
      text:                '<span class="fa fa-wordpress"></span>',
      colors:              ['#77c1e2', '#21759b'],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
    });
    var git = Circles.create({
      id:                  'circles-git',
      radius:              40,
      value:               65,
      width:               10,
      text:                '<span class="fa fa-git"></span>',
      colors:              ['#f87b5f', '#f54d27'],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
    });
    var gulp = Circles.create({
      id:                  'circles-gulp',
      radius:              40,
      value:               40,
      width:               10,
      text:                '<span class="fa fa-twitter"></span>',
      colors:              ['#D3B6C6', '#4B253A'],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
    });
}

createCircleSkills();