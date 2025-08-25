import { useEffect, useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa6';
import { LuShoppingCart } from 'react-icons/lu';

import css from '@/styles/thankU.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { apiList, callGet } from '../api/api';

const Successful = () => {
  const router = useRouter();
  const { id } = router.query;
  const [mblShowSummary, setMblShowSummary] = useState(false);
  const [data, setData] = useState();
  const [product, setProduct] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    if (id) {
      callGet(`${apiList.order}/${id}`).then((res) => {
        console.log(res);
        setData(res?.data?.order);
        setProduct(res?.data?.order?.line_items[0]?.product_id);
      });

      // if (product) {
      //   callGet(`${apiList.product}/${product}`).then((res) => {
      //     setImage(res?.data?.image);
      //   });
      // }
    }
  }, [id]);

  const renderMobileSummary = () => {
    return (
      <>
        <Link className={css.mblLogo} href={'https://www.shoposuga.com'}>
          <img
            className={css.mblLogo}
            src={
              'https://shoposuga.com/cdn/shop/files/OSUGA_LOGO.png?v=1727774392&width=260'
            }
          />
        </Link>
        <div className={css.mblSummary}>
          <button
            className={css.mblSummary_headWrapper}
            onClick={() => setMblShowSummary((prev) => !prev)}
          >
            <div className={css.mblSummary_head}>
              <span>
                <LuShoppingCart size={22} />
                <p className={css.mblSummary_head_text}>
                  {mblShowSummary ? 'Hide' : 'Show'} order summary
                </p>
                <FaAngleDown style={{ marginTop: 6 }} />
              </span>
              {/* <b className={css.mblSummary_head_payment}>₮188000</b> */}
            </div>
          </button>

          <div
            className={css.mblSummary_bodyWrapper}
            style={{
              height: mblShowSummary ? 392 : 0,
              borderWidth: mblShowSummary ? 1 : 0,
            }}
          >
            <div className={css.mblSummary_body}>
              {data?.line_items &&
                data?.line_items.map((el, i) => {
                  return (
                    <div className={css.summary_head} key={i}>
                      <figure className={css.imageFic}>
                        <img className={css.image} src={image} alt='no file' />

                        <p className={css.badgeCount}>{el.quantity}</p>
                      </figure>

                      <div className={css.summary_payment}>
                        <p>{el.name}</p>
                        <span>₮{el.price}</span>
                      </div>
                    </div>
                  );
                })}

              <hr />

              <div className={css.summary_payment}></div>
              <div className={css.summary_payment}>
                <p>Хүргэлт</p>
                <b>
                  Хотын А бүсэд үнэгүй Б бүсэд нэмэлт төлбөр бодогдохыг анхаарна
                  уу!
                </b>
              </div>

              {/* <div className={css.summary_payment}>
                <p>Taxes</p>
                <b>₮10.00</b>
              </div> */}

              <hr />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={css.container}>
      {renderMobileSummary()}

      <div className={css.infoWrapper}>
        <div className={css.info}>
          <Link href={'https://www.shoposuga.com'} className={css.logoWrapper}>
            <img
              className={css.logo}
              src={
                'https://shoposuga.com/cdn/shop/files/OSUGA_LOGO.png?v=1727774392&width=260'
              }
            />
          </Link>

          <div className={css.info_head}>
            <CiCircleCheck color='#5b6e5d' size={62} />

            <div className={css.info_head_text}>
              <p>Order {data?.name}</p>
              <b>Thank you!</b>
            </div>
          </div>

          <div className={css.bank}>
            <div className={css.bank_map}>
              <img
                className='w-full h-[200px] p-1'
                width={500}
                height={500}
                src={
                  'https://shoposuga.com/cdn/shop/files/OSUGA_LOGO.png?v=1727774392&width=260'
                }
              />
            </div>

            <div className={css.bank_info}>
              <b className={css.infoTitle}>Таны захиалга баталгаажлаа</b>

              {/* <ul>
                <li>Та төлбөрөө доорх данс руу шилжүүлнэ үү!</li>
                <li>Гүйлгээний утган дээр # гэж эхэлсэн</li>
                <li>
                  ЗАХИАЛГИЙН ДУГААР эсвэл захиалга өгсөн гар утасны дугаараа
                  заавал оруулна уу!
                </li>
                <li>Банкны нэр: ХААН БАНК</li>
                <li>Данс эзэмшигч: БАТБАЯР МӨНХЖИН</li>
                <li>Дансны дугаар: 5023171178</li>
              </ul> */}
            </div>
          </div>

          <div className={css.bottom}>
            <p>
              Need help?{' '}
              <a className={css.bottom_contact} href='#'>
                Contact us
              </a>
            </p>

            <Link
              className={css.bottom_continue}
              href='https://www.shoposuga.com'
            >
              Худалдан авалтаа үргэлжлүүлэх
            </Link>
          </div>

          <footer className={css.footer}>All rights reserved TheDeely</footer>
        </div>
      </div>

      <div className={css.summaryWrapper}>
        <div className={css.summary}>
          {data?.line_items &&
            data?.line_items.map((el, i) => {
              return (
                <div className={css.summary_head} key={i}>
                  <figure className={css.imageFic}>
                    <img className={css.image} src={image} alt='no file' />
                    <p className={css.badgeCount}>{el.quantity}</p>
                  </figure>
                  <div className={css.summary_payment}>
                    <p>{el.name}</p>
                    <span>₮{el.price}</span>
                  </div>
                </div>
              );
            })}

          <hr />

          <div className={css.summary_payment}>
            <p>Хүргэлт</p>
            <b>
              Хотын А бүсэд үнэгүй Б бүсэд нэмэлт төлбөр бодогдохыг анхаарна уу!
            </b>
          </div>

          {/* <div className={css.summary_payment}>
            <p>Taxes</p>
            <b>₮10.00</b>
          </div> */}

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Successful;
