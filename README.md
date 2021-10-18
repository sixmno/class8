# class8

> Dynamic style generator.

> No more CSS writing. Only Classes.

> Focus on DOM only.


## Installation

Install package with NPM and add it to your development dependencies:

`npm i class8`

## Usage

```html
<div class="w-100px h-10vh bg-red fs-2em color-blue border-2px_dashed_green shadow-0_0_1em_rgba(200,100,0,.3) text-center">text</div>
```


<div style="width: 200px; height: 10vh; background-color: red; color:blue; font-size: 2em; border: 2px dashed green; shadow: 0 0 1em rgba(200,100,0,.3); text-align: center;">text</div>


<p><br><br></p>

### :hover{ .. }

```html
<div class="w-100px h-50px bg-yellow cursor-pointer {:hover}_:bg-blue"></div>
```

<style>
    #hvr{width: 100px; height: 50px; background-color: yellow; cursor: pointer; }
    #hvr:hover{background-color: blue; }
</style>
<div id="hvr"></div>

<p><br><br></p>


help me to complete documentation