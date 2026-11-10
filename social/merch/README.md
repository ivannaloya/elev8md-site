# Friends of Medicine merch, Drop 01

`merch.html?item=<id>&mode=print|mock` draws each product; `mode=lookbook` lays out all mockups.

| id | product | print file | print size |
|---|---|---|---|
| offduty_tee | OFF DUTY tee, cream on black, front | print/offduty_tee_print.png | 4500x5400 (15x18 in at 300 dpi) |
| offduty_cap | OFF DUTY dad hat, embroidered | print/offduty_cap_print.png | 2400x1000 |
| orders_hoodie | Doctor's Orders hoodie, cream on black, front | print/orders_hoodie_print.png | 4500x5400 |
| tour_tee | The Week Tour tee, black, back print | print/tour_tee_print.png | 4500x5400 |
| human_tee | We're Human Too tee, ink on cream, front | print/human_tee_print.png | 4500x5400 |
| proximity_tote | Proximity tote, natural canvas | print/proximity_tote_print.png | 4500x4500 |
| water_mug | Water Over Coffee mug, 11 oz wrap | print/water_mug_print.png | 2700x1080 |

All print files have transparent backgrounds. Render with:

```sh
node render.js "merch.html?item=tour_tee&mode=print" print/tour_tee_print.png 3 t
```

Before sending to a printer: the tour tee front can carry a small left chest mark (`tour_front` art), and the
cap is shown as embroidery, so the embroiderer will digitize `offduty_cap_print.png`.
