import React from "react";
import bagimg from "./assets/images/bagimg.png";

function Retsept() {
  return (
    <div
      className="h-screen bg-cover bg-center min-h-[559px] h-full text-left"
      style={{ backgroundImage: `url(${bagimg})` }}
    >
      <h3 className="text-[#4E9F0D] font-bold text-[36px] leading-[42.26px] py-[42px] pb-[14px] text-center">
        Уникальная рецептура
      </h3>
      <p className="w-[202px] h-[1px] bg-[#4E9F0D] mx-auto"></p>
      <p className="px-[80px] text-white font-normal text-[18px] leading-[23px] pt-[46px]">
        Гамбургер является разновидностью сэндвича, состоящей из жареной
        рубленой котлеты, что подается внутри разрезанной круглой булки. Он
        обычно дополняется разнообразными приправами, к примеру, листьями
        салата, кетчупом и майонезом, дольками маринованного огурца, помидора
        или кабачка, сырым или поджаренным луком.
      </p>
      <p className="px-[80px] text-white font-normal text-[18px] leading-[23px] pt-[25px] pb-[100px]">
        Будучи наиболее распространенной «быстрой» едой в США, гамбургер имеет
        далеко не американское происхождение. Ученые приписывают его авторство
        кочевникам-скифам, которые клали обжаренное мясо между двумя хлебными
        ломтиками. А в Новый свет «король» фаст-фуда приехал вместе с немецкими
        иммигрантами: его назвали, кстати, в честь Гамбурга, второго по
        масштабам города Германии. Официальной датой продажи первого гамбургера
        в США считается 27 июля 1900-го - в этот день гастроном из Нью-Хейвена
        предложил жителям города покупать приправленную кетчупом котлету,
        «зажатую» между двумя кусками булки. Изначально такая еда была
        прерогативой бедных слоев населения, но вскоре по всей стране стали
        открываться «фаст-фудовые» заведения, в которых, быстрым было не только
        питание, но и обслуживание, и смена клиентов. Эти общепиты взяли курс на
        оперативное детское питание - и для всегда занятого рабочего класса на
        тот момент они стали лучшим решением проблемы, где и чем быстро
        накормить детей.
      </p>
    </div>
  );
}

export default Retsept;
