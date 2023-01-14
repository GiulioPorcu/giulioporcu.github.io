---
layout: page
permalink: /resources/
title: Giulio Porcu - Resources
---
<div>
  <h2>All available resource pages</h2>
  <hr />
  <ul>
  {% for post in site.posts %}
      {% if post.category == "resource" %}
        <li>
            <h3>
             <a href="{{ post.url }}" >{{ post.title }}</a>
            </h3>
         </li>
      {% endif %}
  {% endfor %}
  </ul>
</div>