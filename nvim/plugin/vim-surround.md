

# surround.vim

## use  `tpope/vim-surround`

https://github.com/tpope/vim-surround



| **Mode** | **Desc**                       | **Keymap**                     |
| ---      | ---                            | ---                            |
| N        | change "aaa" to 'aaa'          | `cs"'`                         |
|          | change 'aaa' to <p>aaa<p>      | `cs'<p>`                       |
|          | remove 'aaa' to aaa            | ds'                            |
|          | Hello world! to [Hello] world! | yusiw]                         |
| V        |                                |                                |
|          | Hello world! => Hello (world)! | selected Hellow and press `S(` |



ref by:
https://gist.github.com/wilon/ac1fc66f4a79e7b0c161c80877c75c94#file-vim-surround-md

<style>
/* tr:nth-child(even) { */
/*   background-color: #b2b2b2!important; */
/*   color: #f4f4f4!important; */
/* } */

tr:nth-child(even) {
  background-color: unset!important;
  color: unset!important;
}
</style>



