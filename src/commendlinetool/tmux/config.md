
## my tmux config 
```bash


# [prefix = C-s]

# !!! refresh tmux just do prefix + shift + i !!!
# !!! refresh tmux just do prefix + shift + i !!!
# !!! refresh tmux just do prefix + shift + i !!!

# !!! if not work, try exit to shell and command: tmux source-file ~/.tmux.conf !!!
# !!! if not work, try exit to shell and command: tmux source-file ~/.tmux.conf !!!
# !!! if not work, try exit to shell and command: tmux source-file ~/.tmux.conf !!!

# init
# 1.[source tmuxa]
# tmux source-file $HOME/.config/tmux/.tmux.conf 

# 2.[install plugin manager tpm] 
# git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm

# !!! read this to learn scroll mode !!!
# key bindings on scroll mode is [prefix + [ + h/j/k/l]
# !!! first into copy mode(prefix + [), then use h/j/k/l to scroll !!!
# !!! to leave scroll mode, press q !!!

# !!! read this to see keyMap !!!
# prefix + [ can into copy mode
# in copy mode, v can select text
# in copy mode, h/j/k/l can move cursor
# in copy mode, y can copy
# prefix + p can paste



# 3.[install plugins]
set -g @plugin 'tmux-plugins/tpm' # tmux plugin manager

# 讓 tmux 比較合乎邏輯 (sensible)
set -g @plugin 'tmux-plugins/tmux-sensible'

# let you copy to system clipboard
set -g @plugin 'tmux-plugins/tmux-yank' 

# save and restore tmux session,
set -g @plugin 'tmux-plugins/tmux-resurrect' 
# [save] prefix + Ctrl-s
# [restore] prefix + Ctrl-r

# tmux-pain-control
set -g @plugin 'tmux-plugins/tmux-pain-control'
# tmux-pain-control keyMap

# [split] prefix + (|, -, \, _), for vertical, horizontal, vertical reverse, horizontal reverse
# [move] prefix + h/j/k/l,
# [resize] prefix + H/J/K/L, 
# [swap] prefix + (<, >), for swap pane left, right, example: prefix + >

# 持續幫你儲存 tmux 的設定。
set -g @plugin 'tmux-plugins/tmux-continuum'

set -g @plugin 'tmux-plugins/christoomey/vim-tmux-navigator' # C-s + h/j/k/l

# install dracula theme
set -g @plugin 'dracula/tmux'
set -g @dracula-plugins "cpu-usage ram-usage battery time weather "

set -g @dracula-show-powerline true

set -g @dracula-cpu-usage-colors "gray white"
set -g @dracula-ram-usage-colors "dark_gray white"
set -g @dracula-battery-colors "gray white"
set -g @dracula-network-colors "dark_gray white"
set -g @dracula-time-colors "gray white"
set -g @dracula-weather-colors "dark_gray white"

set -g @dracula-day-month true
set -g @dracula-military-time true
set -g @dracula-time-format "%F %R"

set -g @dracula-battery-label "BAT"

set -g @dracula-show-left-sep 
set -g @dracula-show-right-sep 

set -g @dracula-fixed-location "Taipei"

set -g status-position bottom 

set -g default-terminal "screen-256color"

# [prefix = C-s]
# refresh tmux just do prefix + shift + I

# installing plugins

# Add new plugin to ~/.tmux.conf with set -g @plugin '...'
# Press prefix + I (capital i, as in Install) to fetch the plugin.
# You're good to go! The plugin was cloned to ~/.tmux/plugins/ dir and sourced.

# Uninstalling plugins

# Remove (or comment out) plugin from the list.
# Press prefix + alt + u (lowercase u as in uninstall) to remove the plugin.
# All the plugins are installed to ~/.tmux/plugins/ so alternatively you can find plugin directory there and remove it.

# Key bindings

# prefix + I

# Installs new plugins from GitHub or any other git repository
# Refreshes TMUX environment
# prefix + U

# updates plugin(s)
# prefix + alt + u

# remove/uninstall plugins not on the plugin list


# 4.[change prefix key from C-b to C-s]
# 5.[move like vim]



# install

unbind r
# bind r source-file ~/.tmux.conf
bind r source-file ~/.config/tmux/.tmux.conf


# [change prefix key from C-b to C-s]
set -g prefix C-s
# [move like vim]
set -g mode-keys vi

bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R

bind -T copy-mode-vi v send -X begin-selection
bind -T copy-mode-vi y send-keys -X copy-pipe-and-cancel "pbcopy"
bind p paste-buffer


# set scroll on 
set -g mouse on
# key bindings on scroll mode is [prefix + [ + h/j/k/l]
# !!! first into copy mode(prefix + [), then use h/j/k/l to scroll !!!
# !!! to leave scroll mode, press q !!!

# on  [C-s w  Choose a window from a list] , use space to select
# bind-key -r Space choose-window
# bind-key -r Space choose-window
# bind-key space choose-window






# 3.1 [Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)]
run '~/.tmux/plugins/tpm/tpm'
```
