function ElecBill(){
	var getUnit=document.getElementById('units').value;
	
	var fixed1=30;//units fixed 1-30
	var fixed2=60;//fixed 31-60
	var fixed3=90;//fixed amount 61-90
	var fixed4=480;//fixed amount 91-180
	var fixed5=540;//>180

	var valu2=7.85;//units per unit 1-60
	var val3=10;// per unit 61-90
	var val4=27.75;//per unit 91-120
	var val5=32;//per unit 121-180
	var val6=45;//per unit 181-250
	
	
	

	if(getUnit<30){
		bill=(getUnit*valu2)+fixed1;
	}
	if(getUnit>30 && getUnit<=60){
		bill=(getUnit*valu2)+60;
	}
	if(getUnit>60 && getUnit<=90){
		bill=(60*valu2)+(getUnit-60)*val3+90;
	}
	if(getUnit>90 && getUnit<=120){
		bill=(60*valu2)+(30*val3)+(getUnit-90)*val4+fixed4;
	}
	if(getUnit>120 && getUnit<=180){
		bill=(60*valu2)+(30*val3)+(30*val4)+(getUnit-120)*val5+fixed4;
	}
	if(getUnit>180){
		bill=(60*valu2)+(30*val3)+(30*val4)+(50*val5)+(getUnit-180)*val6+fixed5;
	}
	
	var typeBill=document.getElementById("BillResult");
	typeBill.innerHTML="<h4> Your Bill : &nbsp &nbsp&nbsp&nbsp&nbsp&nbsp"+bill+"</h4>";
}




