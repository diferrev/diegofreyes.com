function createCircleSkills(){
    var radius = 60;
    var html = Circles.create({
      id:                  'circles-html',
      radius:              radius,
      value:               80,
      text:                '<span class="icon icon-html5"></span>',
      colors:              ['#ec866a', '#e34f26'],
      duration:            1400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
    });
    var css = Circles.create({
      id:                  'circles-css',
      radius:              radius,
      value:               60,
      text:                '<span class="icon icon-css3"></span>',
      colors:              ['#74b6eb', '#1B73BA'],
      duration:            1400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
    });
    var wordpress = Circles.create({
      id:                  'circles-wordpress',
      radius:              radius,
      value:               60,
      text:                '<span class="icon icon-wordpress"></span>',
      colors:              ['#77c1e2', '#21759b'],
      duration:            1400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
    });
     var angularjs = Circles.create({
      id:                  'circles-angularjs',
      radius:              radius,
      value:               40,
      text:                '<span class="icon icon-angularjs"></span>',
      colors:              ['#de7b7d', '#b52e31'],
      duration:            1400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
    });
    var laravel = Circles.create({
      id:                  'circles-laravel',
      radius:              radius,
      value:               50,
      text:                '<span class="icon icon-laravel"></span>',
      colors:              ['#f8867f', '#f55247'],
      duration:            1400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
    });
    var git = Circles.create({
      id:                  'circles-git',
      radius:              radius,
      value:               60,
      text:                '<span class="icon icon-git"></span>',
      colors:              ['#f87b5f', '#f54d27'],
      duration:            1400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
    });
}

createCircleSkills();