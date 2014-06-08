d7-modal-node-forms
===================

Drupal 7 collection of custom modules to attempt handling node forms in CTools modals<br>
(and also node view for tests)


*Why the weird name ?*<br>
Because Drupal 7 Hooks are not fired when using certain module names (e.g. try `hook_init()` in a module name like `modal_style`) -> used an extra letter `c` for `CTools`.

Research done beforehand :

- modal_forms : no node forms
- colorbox : no error handling, not designed for forms
- colorbox_node : no node forms
- ctools_automodal : incomplete, prohibitive bugs, virtually unmaintained, requires too much work
- dialog + http://pixeljets.com/blog/improving-user-experience-using-dialogs-profile-edit-modal-forms : requires too much work, ajax file widgets broken...
- http://drupion.com/blog/10-steps-creating-ctools-modal-window-drupal-7 : this is what I was aiming to generalize, seemed more robust.

update 2014/06/08 23:24:37 - I'm giving up (but leaving it here for documentation and/or later further tests) because in my tests, widgets like file uploads / removals are broken,<br>
and I'm guessing other "real-world" widgets used in node forms will be as well (ex: modules like `asset` or `inline_entity_form`)...

I will now try another method - the one I've already used in D6 with module `modalframe`,
because in an iframe, maybe there will be less depressing surprises (and less time wasted)
