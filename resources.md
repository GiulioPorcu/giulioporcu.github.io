---
layout: page
title: Resources
permalink: /resources/
---
<div>
  {% for post in site.posts %}
      {% if post.tag == "resource" %}
          <h2>
            <a href="{{ post.url }}">
              {{ post.title }}
            </a>
          </h2>
          {{ post.excerpt }}
      {% endif %}
  {% endfor %}
</div>