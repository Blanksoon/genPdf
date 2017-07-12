var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()

var apiKey = 'Fq3nu4SBa4s-dxD8Ovyi81c7pUajLXnBkAd4r9wItc'

app.use(bodyParser.json())

app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/bot.js', (req, res) => {
  var pdf = String(sendText())
  console.log('pdf', pdf)
  //res.sendStatus(200)
  res.download('helloworld.pdf');
})

function sendText () {
  var jsreport = require('jsreport-core')({
    "phantom": {   
      "defaultPhantomjsVersion": "2.1.1",
    },
    "assets": {
      allowedFiles: '**/*.*',
      publicAccessEnabled: true,
      searchOnDiskIfNotFoundInStore: true,
   }
  })
  //jsreport.use(require('jsreport-assets')({}))
  //var phantomPath = require('phantomjs-exact-2-1-1').path
  var fs = require('fs');
  jsreport.init().then(function () {     
    return jsreport.render({
      template: {
        //content: '<h1>Hello {{:foo}}</h1>',
          content:`<html>
                    <head>
                      <style>
                          {#asset assets/style.css @encoding=utf8}
                      </style>
                    </head>
                    <body>
                      <page size="A4">
                        <div class="half-page">
                          <div class="outside-frame">
                            <table width="100%" height="100%" align="center">
                              <tr height="60px">
                                <td>
                                  <table border=0 width="97%" height="100%" align="center">
                                    <tr>
                                      <td width="21%"><img src="{#asset assets/ittp.png @encoding=dataURI}" height="15%" style="object-fit: contain" /></td>
                                      <td width="57%" style="font-size: 10.5px" colspan=3>
                                        บริษัท ไอทีทีพี จำกัด<br>
                                        183 ซอย ลาดพร้าว 71 แขวงสะพานสอง เขตวังทองหลาง กรุงเทพมหานคร 10310<br>
                                        โทร 02-5303542 แฟกซ์ 02-5303540<br>
                                        เลขผู้เสียภาษีอากร / ทะเบียนเลขที่ 0105554146049
                                      </td>
                                      <td align="center">
                                        <div style="background-color: lightskyblue; padding: 14px">
                                          ต้นฉบับ(สำหรับลูกค้า)<br>
                                          ใบรับเงิน
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr height="0">
                                <td>
                                  <table width="98%" height="100%" align="center">
                                    <tr>
                                      <td width="65%">
                                        <table width="100%" height="100%" align="center" >
                                          <tr height="23%">
                                            <td width="16%" center="true" my-border="1">เลขที่สัญญา</td>
                                            <td style="padding-left: 10px" my-border="1">
                                              <div style="display: inline-block; width: 45%;">59-10-03-0551</div>
                                              <div style="display: inline-block">ประเภท</div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td center="true" my-border="1">ลูกค้า</td>
                                            <td colspan=2 my-border="1" style="padding-left: 6px">
                                              นาย ชยพล ชิมังค์<br>
                                              บริษัท ยูนิลีเวอร์ไทยโฮลดิ้งส์ จำกัด 64 อาคาร PCL MIXING หมู่ 4
                                              ซ.ฉลองกรุง 31 ถ.ฉลองกรุง แขวงลำปลาทิว เขตลาดกระบัง กรุงเทพมหานคร 10520
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <td my-border="1" style="border-left: 0px">
                                        <table width="94%" align="center">
                                          <tr>
                                            <td>สาขา</td>
                                            <td>สำนักงานใหญ่</td>
                                          </tr>
                                          <tr>
                                            <td>รหัสลูกค้า</td>
                                            <td>12345678987654</td>
                                          </tr>
                                          <tr>
                                            <td>วันที่</td>
                                            <td>21/4/2560</td>
                                          </tr>
                                          <tr>
                                            <td>เลขที่ใบเสร็จรับเงิน</td>
                                            <td>No5636</td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr height="10px">
                                <td style="text-align: center; vertical-align: middle; height: 70px">
                                  <table width="98%" height="98%" align="center" style="border-collapse: separate; border-spacing: 0px 4px;">
                                    <tr style="background-color: lightskyblue; height: 35px">
                                      <td>รายการ</td>
                                      <td>จำนวนเงินต้นคงเหลือ (บาท)</td>
                                      <td>ดอกเบี้ย (บาท)</td>
                                      <td>ค่าติดตามทวงถาม (บาท)</td>
                                      <td>จำนวนเงินรวม (บาท)</td>
                                    </tr>
                                    <tr style="height: 35px" inside-border="1">
                                      <td>รับชำระ</td>
                                      <td align-right="true">1,489.70</td>
                                      <td align-right="true">510.30</td>
                                      <td align-right="true">.00</td>
                                      <td align-right="true">2,000.00</td>
                                    </tr>
                                    <tr>
                                      <td align-left="true">จำนวนเงินที่ชำระเป็นตัวอักษร</td>
                                      <td align-left="true" colspan=2>สองพันบาทถ้วน</td>
                                      <td align-right="true">ยอดเงินชำระสุทธิ</td>
                                      <td align-right="true">2,000.00</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr height="10px">
                                <td>
                                  <table style="font-size: 11.3px; font-weight: bold" width="100%" height="100%" align="center">
                                    <tr>
                                      <td colspan=6 style="padding-left: 50px"><input type="checkbox" /> เงินสด</td>
                                    </tr>
                                    <tr>
                                      <td style="padding-left: 50px" width="90px"><input type="checkbox" /> เช็คธนาคาร</td>
                                      <td>_________________________</td>
                                      <td>สาขา</td>
                                      <td>_________________________</td>
                                      <td>ลงวันที่</td>
                                      <td>_________________________</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr height="50px">
                                <td>
                                  <table width="96%" height="100%" align="center">
                                    <tr>
                                      <td style="font-size: 10px"><div style="font-weight: bold; display: inline-block">หมายเหตุ</div>   กรณีที่ชำระเป็นเช็ค บริษัทจะคิดดอกเบี้ยถึงวันที่เช็คเรียกเก็บได้แล้วเท่านั้น</td>
                                      <td width="40%">
                                        <table width="100%" height="85%" align="center" style="text-align: center">
                                          <tr style="background-color: lightskyblue" height="1%">
                                            <td my-border="2" width="50%" style="font-size: 10px; font-weight: bold;">ลายมือชื่อผู้รับชำระ</td>
                                            <td my-border="2" width="50%" style="font-size: 10px; font-weight: bold;">ลายมือชื่อเจ้าหน้าที่การเงิน</td>
                                          </tr>
                                          <tr>
                                            <td my-border="2"></td>
                                            <td my-border="2"></td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                        <div style="padding-top: 0px; padding-bottom: 10px">
                          <div class="line">-----------------------------------------------------------------------------------------------------------------------------------------------------</div>
                        </div>
                        <div class="half-page">
                          <div class="outside-frame">
                            <table width="100%" height="100%" align="center">
                              <tr height="60px">
                                <td>
                                  <table border=0 width="97%" height="100%" align="center">
                                    <tr>
                                      <td width="21%"><img src="{#asset assets/ittp.png @encoding=dataURI}" height="15%" style="object-fit: contain" /></td>
                                      <td width="57%" style="font-size: 10.5px" colspan=3>
                                        บริษัท ไอทีทีพี จำกัด<br>
                                        183 ซอย ลาดพร้าว 71 แขวงสะพานสอง เขตวังทองหลาง กรุงเทพมหานคร 10310<br>
                                        โทร 02-5303542 แฟกซ์ 02-5303540<br>
                                        เลขผู้เสียภาษีอากร / ทะเบียนเลขที่ 0105554146049
                                      </td>
                                      <td align="center">
                                        <div style="background-color: lightskyblue; padding: 14px">
                                          สำเนา(สำหรับบริษัท)<br>
                                          ใบรับเงิน
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr height="0">
                                <td>
                                  <table width="98%" height="100%" align="center">
                                    <tr>
                                      <td width="65%">
                                        <table width="100%" height="100%" align="center" >
                                          <tr height="23%">
                                            <td width="16%" center="true" my-border="1">เลขที่สัญญา</td>
                                            <td style="padding-left: 10px" my-border="1">
                                              <div style="display: inline-block; width: 45%;">59-10-03-0551</div>
                                              <div style="display: inline-block">ประเภท</div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td center="true" my-border="1">ลูกค้า</td>
                                            <td colspan=2 my-border="1" style="padding-left: 6px">
                                              นาย ชยพล ชิมังค์<br>
                                              บริษัท ยูนิลีเวอร์ไทยโฮลดิ้งส์ จำกัด 64 อาคาร PCL MIXING หมู่ 4
                                              ซ.ฉลองกรุง 31 ถ.ฉลองกรุง แขวงลำปลาทิว เขตลาดกระบัง กรุงเทพมหานคร 10520
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <td my-border="1" style="border-left: 0px">
                                        <table width="94%" align="center">
                                          <tr>
                                            <td>สาขา</td>
                                            <td>สำนักงานใหญ่</td>
                                          </tr>
                                          <tr>
                                            <td>รหัสลูกค้า</td>
                                            <td>12345678987654</td>
                                          </tr>
                                          <tr>
                                            <td>วันที่</td>
                                            <td>21/4/2560</td>
                                          </tr>
                                          <tr>
                                            <td>เลขที่ใบเสร็จรับเงิน</td>
                                            <td>No5636</td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr height="10px">
                                <td style="text-align: center; vertical-align: middle; height: 70px">
                                  <table width="98%" height="98%" align="center" style="border-collapse: separate; border-spacing: 0px 4px;">
                                    <tr style="background-color: lightskyblue; height: 35px">
                                      <td>รายการ</td>
                                      <td>จำนวนเงินต้นคงเหลือ (บาท)</td>
                                      <td>ดอกเบี้ย (บาท)</td>
                                      <td>ค่าติดตามทวงถาม (บาท)</td>
                                      <td>จำนวนเงินรวม (บาท)</td>
                                    </tr>
                                    <tr style="height: 35px" inside-border="1">
                                      <td>รับชำระ</td>
                                      <td align-right="true">1,489.70</td>
                                      <td align-right="true">510.30</td>
                                      <td align-right="true">.00</td>
                                      <td align-right="true">2,000.00</td>
                                    </tr>
                                    <tr>
                                      <td align-left="true">จำนวนเงินที่ชำระเป็นตัวอักษร</td>
                                      <td align-left="true" colspan=2>สองพันบาทถ้วน</td>
                                      <td align-right="true">ยอดเงินชำระสุทธิ</td>
                                      <td align-right="true">2,000.00</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr height="10px">
                                <td>
                                  <table style="font-size: 11.3px; font-weight: bold" width="100%" height="100%" align="center">
                                    <tr>
                                      <td colspan=6 style="padding-left: 50px"><input type="checkbox" /> เงินสด</td>
                                    </tr>
                                    <tr>
                                      <td style="padding-left: 50px" width="90px"><input type="checkbox" /> เช็คธนาคาร</td>
                                      <td>_________________________</td>
                                      <td>สาขา</td>
                                      <td>_________________________</td>
                                      <td>ลงวันที่</td>
                                      <td>_________________________</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr height="50px">
                                <td>
                                  <table width="96%" height="100%" align="center">
                                    <tr>
                                      <td style="font-size: 10px"><div style="font-weight: bold; display: inline-block">หมายเหตุ</div>   กรณีที่ชำระเป็นเช็ค บริษัทจะคิดดอกเบี้ยถึงวันที่เช็คเรียกเก็บได้แล้วเท่านั้น</td>
                                      <td width="40%">
                                        <table width="100%" height="85%" align="center" style="text-align: center">
                                          <tr style="background-color: lightskyblue" height="1%">
                                            <td my-border="2" width="50%" style="font-size: 10px; font-weight: bold;">ลายมือชื่อผู้รับชำระ</td>
                                            <td my-border="2" width="50%" style="font-size: 10px; font-weight: bold;">ลายมือชื่อเจ้าหน้าที่การเงิน</td>
                                          </tr>
                                          <tr>
                                            <td my-border="2"></td>
                                            <td my-border="2"></td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </page>
                    </body>
                  </html>`,
        engine: 'jsrender',
        recipe: 'phantom-pdf',
        electron:{
          marginType: 1,
          format: 'A4',
        }
      },
      data: {
        foo: "world"
      }
    }).then(function(resp) {
    //prints pdf with headline Hello world
      console.log(resp.content.toString())
      //resp.result.pipe(fs.createWriteStream('helloworld.pdf'));
      fs.writeFileSync('helloworld.pdf', resp.content)
    });
  }).catch(function(e) {
    console.log(e)
  })
}

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})