<template>
    <div>
        <div class="line"></div>
        <div class="outcir cir">
            <div class="incir cir"></div>
        </div>
        <!-- <div style="clear:both"></div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
$color=#0060fe
.line{
    float left
    height 2px
    width 130px
    background $color
}
.cir{
    border-radius 100%
    color $color
}
.outcir{
    width 30px
    height 30px
    background transparent
    border 1px solid $color
    display flex
    justify-content center
    align-items center
    float left
    transform translateY(-50%)
    .incir{
        width 20px
        height 20px
        background $color
    }
}
</style>
