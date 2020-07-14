<template>
<div class="wrapper">
    <header>
        <div class="user-panel">
            <div class="userpic">
                <img src="../../assets/images/placeholder.jpg"/>
            </div>
            <div class="user-info">
                <p>
                    <span>Главный диспетчер </span>
                    <span>Иванов Иван Иванович</span>
                </p>
            </div>
        </div>
        <nav class="main-menu">
            <ul>
                <li>
                    <a href="#">Главное меню</a>
                </li>
                <li class="has-dropdown">
                    <a href="#">ПУ</a>
                    <ul class="dropdown">
                        <li>
                            <a href="#">ПУ-2</a>
                        </li>
                        <li>
                            <a href="#">ПУ-2а</a>
                        </li>
                        <li>
                            <a href="#">ПУ-2б</a>
                        </li>
                        <li>
                            <a href="#">ПУ-4</a>
                        </li>
                        <li>
                            <a href="#">ПУ-27</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Графики вагонов</a>
                </li>
                <li>
                    <a href="#">Выход из системы</a>
                </li>
            </ul>
        </nav>
    </header>
     <div class="main">
         <router-view/>
     </div>
</div>
</template>


<script>
export default {
   
}
</script>
