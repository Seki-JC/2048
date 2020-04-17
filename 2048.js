window.onload = function(){
    var btn = document.getElementById('gameStarBtn');
    btn.onclick = function(){
        init();
    }
    document.onkeydown = function(even){
        var key = window.event.keyCode;
        // 左，37
        if (key == 37){
            arr = left(arr);
            update();
            random2();
        }
        // 上，38
        if (key == 38){
            arr = up(arr);
            update();
            random2();
        }
        // 右，39
        if (key == 39){
            arr = right(arr);
            update();
            random2();
        }
        // 下，40
        if (key == 40){
            arr = down(arr);
            update();
            random2();
        }
    }
    
};
    //受害者数组登场
    var arr = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

    //改变一个位置的背景颜色（对应cell-x-y的背景颜色）和数字（对应cell的p的innerHTML）
    function changeCell(x,y,num){
        // 获取对应cell的对象
        var cell = document.getElementById("cell-"+x+"-"+y);
        // 获取cell下的p的对象
        var cellP = cell.children[0];
        if (num!=0){
            //更改p下的数字
            cellP.innerHTML = num;
            //更改div的背景颜色
            cell.style.backgroundColor = getColor(num);
        }else{
            cellP.innerHTML = null;
            cell.style.backgroundColor = null;
        }
        
    }
    
    //不同数字对应的背景颜色
    function getColor(num){
        switch(num){
            case 0:
                return null;
                break;
            case 2:
                return 'blue';
                break;
            case 4:
                return 'orange';
                break;
            case 8:
                return 'yellow';
                break;
            case 16:
                return 'pink';
                break;
            case 32:
                return 'red';
                break;
            case 64:
                return '#bfa';
                break;
            case 128:
                return 'green';
                break;
            case 256:
                return 'yellowgreen';
                break;
            case 512:
                return '#777';
                break;
            case 1024:
                return '#999';
                break;
            case 2048:
                return '#eee';
                break;
            case 4096:
                return '#aaa';
                break;
            case 8192:
                return '#bbb';
                break;
        }
        return 'black';
    }
    
    //随机出现2的函数
    function random2(){
        if (isFull(arr)){return false;}
        // 随机挑选一个位置
        while(1){
            var ranX = Math.floor(Math.random()*4);
            var ranY = Math.floor(Math.random()*4);
            if (arr[ranX][ranY] == 0){
                arr[ranX][ranY] = 2;
                changeCell(ranX,ranY,2);
                break;
            }
        }
    }

    //初始化函数
    function init(){
        //遍历数组arr
        for (var i=0;i<4;i++){
            for (var j=0;j<4;j++){
                arr[i][j]=0;
                changeCell(i,j,0);
            }
        }
        random2();
        random2();
    }
    

    //检查arr数组是否已满
    function isFull(arr){
        for (var i=0;i<4;i++){
            for (var j=0;j<4;j++){
                if (arr[i][j]==0){return false;}
            }
        }
        return true;
    }

    //遍历数组arr
    function update(){
        for (var i=0;i<4;i++){
            for (var j=0;j<4;j++){
                    changeCell(i,j,arr[i][j]);
                
            }
        }
    }
    