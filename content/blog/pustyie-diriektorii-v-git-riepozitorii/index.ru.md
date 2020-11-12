---
title: Пустые директории в git репозитории
date: "2017-06-04 12:00"
description: "Недавно появился вопрос для обсуждения как хранить структуру проекта в git репозитории если речь идет о пустых директориях."
slug: pustyie-diriektorii-v-git-riepozitorii
---

Недавно появился вопрос для обсуждения как хранить структуру проекта в git репозитории если речь идет о пустых директориях.

**Цель**: сохранение целостности проекта, а так же недопущение появления ошибок в случае если нет проверки на созданную папку и создание ее в коде, но она там подразумевает быть, а файлы внутри папки в репозитории не должны находиться (например логи или другие runtime данные).
**Проблема**: git не будет хранить пустые директории в репозитории. Git вообще не хранит папки во внутренней структуре, он хранит только файлы ([FAQ Git kernel](https://git.wiki.kernel.org/index.php/Git_FAQ#Can_I_add_empty_directories.3F)).

---
Какие есть выходы из положения:

1. Самое очевидное — не хранить пустые директории в репозитории, всегда делать проверку на созданную папку и создавать ее из кода при необходимости.
    - **Плюсы**: Не имеем вообще вышеозначенных проблем. Никаких лишних папок в репозитории, .gitignore всегда выглядит чисто и там только необходимые пути. Всегда уверены что будет сделана проверка на создание папки.
    - **Минусы**: На практике скорее всего окажется, что проверка на наличие директории не была сделана, или используется сторонняя библиотека, где это не сделано и все упадет с ошибкой. При взгляде на репозиторий не всегда будет очевидно где храниться runtime/логи и прочее.

2. Держать всю подобную структуру в файле .gitignore в корне проекта. Указывать там все директории внутри которых необходимо игнорировать все файлы, а в исключение (через !) добавлять файлы .gitkeep находящиеся внутри наших пустых директорий.
    - **Плюсы**: В таком режиме имеем всю необходимую структуру проекта внутри одного файла, если разработчик увидит что его файл игнорируется, он всегда может пойти в четко обозначенное место для проверки почему это происходит.
    - **Минусы**: При таком подходе файл .gitignore может немного разрастись, он может выглядеть не всегда очевидно, а так же получаем бессмысленные файлы .gitkeep раскиданные по проекту. Возникает неудобство например если вам нужно сохранить папки внутри директории в которой игнорируется все, для этого нужно будет плясать с ручными указаниями внутри .gitignore.

3. В глобальном файле .gitignore указывать только игнорируемые глобально по проекту пути. Если же необходимо сохранить определенную директорию мы создаем внутри нее еще один файл .gitignore и внутри него игнорировать все кроме .gitignore
    - **Плюсы**: Убиваем двух зайцев: создавая внутри пустой директории файл и в нем же указывая игнор внутри этой папки.
    - **Минусы**: Имеем неясную структуру игнорирования проекта раскиданную по всем директориям, а не в едином корневом .gitignore файле. Кто то может глобально переписать такое использование .gitignore.

---
В интернете если различные доводы на эту тему, но в целом однозначной best practice найти не удалось:
https://stackoverflow.com/questions/115983/how-can-i-add-an-empty-directory-to-a-git-repository — тут за третий вариант гораздо больше голосов нежели за второй.
https://stackoverflow.com/questions/14541253/commit-empty-folder-structure-with-git — тут советую второй вариант, но тема гораздо менее популярна.
https://www.git-tower.com/learn/git/faq/add-empty-folder-to-version-control — такие простые статейки советуют все таки делать .keep файл.
http://bytefreaks.net/gnulinux/bash/how-to-add-automatically-all-empty-folders-in-git-repository — предлагается оба варианта, и даже пути для их автоматизации.
https://stackoverflow.com/questions/7229885/what-are-the-differences-between-gitignore-and-gitkeep — очень неплохой довыд на тему того что .gitignore является частью возможностей git, а .gitkeep нет.
http://harmssite.com/2012/08/gitignore-vs-gitkeep/ — и последнее мнение с которым я вообщем то полностью и согласен, сообщающее нам о том что .gitkeep пришел и Rails комьюнити и предлагающее доводы описанные мной выше почему этот вариант прост и понятен.

---
Собственно мое мнение совпадает вместе с последним автором, в связи с чем считаю проблему статьи решенной.