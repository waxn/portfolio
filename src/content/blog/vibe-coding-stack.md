---
title: 'My Vibe Coding Tool Stack'
description: 'Experimenting with modern tools like Cursor, Windsurf, Supabase, Amp, and Convex to build modern and useful web applications.'
author: 'Linus Thoreson'
pubDate: 'Sep 26 2025'
heroImage: '../../assets/images/vibe-coding.webp'
category: 'Tools'
tags: ['coding', 'webdev', 'tools', 'ai', 'vibe-coding']
---

I've been experimenting with a recent trend, vibe-coding. It is essentially where you use AI tools to build your app for you, without righting a single line of code. It is very useful for someone like me who does not know how to code, but still wants to build something cool and useful. 

## The Tools I Use

Whenever I start a project, I will almost always go to ChatGPT and give it a general outline of what I want, and request it to write a more descriptive prompt. I then paste that prompt into <a href="https://cursor.sh/">**Cursor**</a> because of its remarkable ability to generate hundreds of files for me and a working basic application in minutes. 

Once Cursor has generated the basic files, I will either start a new chat thread directly in Cursor or transition over to <a href="https://windsurf.com/">**Windsurf**</a> to expand the functionality to a reasonable level and polish the UI a bit.

Once I have all the functionality I want, I go to <a href="https://code.visualstudio.com/">**VSCode**</a> to smooth out all the bugs that I inevitably find. I have also recently been trying out <a href="https://ampcode.com/">**Amp**</a> to fix bugs as well. It works directly in VSCode and is very fast. 

When generating code with AI, especially ones like Cursor, it is very important to setup your project with a <a href="https://github.com/">**git**</a> repo. Because of AI's tendancy to change files in a way that breaks them completely while still telling you it improved everything, it is extremely important to be able to revert back to your previous versions of your code. I personally use <a href="https://github.com/">**GitHub**</a> for this, but you can use whatever git server you want, they all work about the same. 

## App Frameworks & BaaS

For the frontend, I like using modern and fast frameworks like <a href="https://astro.build/">**Astro**</a> and <a href="https://svelte.dev/">**Svelte**</a>. Before I started giving the AI more constraints on what tools to use, it would almost always default to <a href="https://react.dev/">**React**</a>, but it rarely gets the file extensions and import statements right with that. Because of that, I started telling explicitly to use Astro (if the project is a static website), or Svelte (if the project is a funtional and interactive website). 

Most of the projects I end up wanting to build require a backend database of some sort, and due to the remarkable tendancy my server has of currupting itself I often use a BaaS service. My favorites are <a href="https://supabase.com/">**Supabase**</a>, because it is fast and easy to view the data, and <a href="https://convex.dev/">**Convex**</a>, because it allows the AI to generate the schema automatically for you.

For quicker apps that I just want to work quickly, I use <a href="https://flask.palletsprojects.com/">**Flask**</a> or <a href="https://django.org/">**Django**</a> because the AI can generate a single file that will make the database for you, and they include auth out of the box.

This new stack is significanlty better than my previous solution, generating code in the browser and pasteing it in. It is much faster, and I don't have to worry about resource limits when it generates the code over and over in full.