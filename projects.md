---
layout: page
title: Projects
permalink: /projects/
---
<div>
  {% for post in site.posts %}
      {% if post.tag == "project" %}
          <h2>
            <a href="{{ post.url }}">
              {{ post.title }}
            </a>
          </h2>
          {{ post.excerpt }}
      {% endif %}
  {% endfor %}
</div>