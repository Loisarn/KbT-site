import { Collapse } from 'antd';
import React from 'react';

const { Panel } = Collapse;

const FaqPage = () => {
    return (
      <div className="block faqBlock">
        <h2 className="faq-questions">VANLIGA FRÅGOR</h2>
        <div className="container-fluid">
        <Collapse defaultActiveKey={['1']}>
        <Panel header="Kan man bada efter en tatuering?" key="1">
          <p>Din tatuering behöver tid på sig att läka och därför bör du undvika både sol och bad under de första 2-3 veckorna.
            Duscha ska och bör du göra som vanligt</p>
        </Panel>
        <Panel header="Hur lång tid ska plasten sitta på?" key="2">
          <p>Collapse Content</p>
        </Panel>
        <Panel header="Är en tatuering permanent?" key="5">
          <p>Ja, en tatuering är permanent men det finns några få saker man kan tänka på för att få ett så bra slutresultat som möjligt.
            Solen, hur kroppen läker och hälsan kan vara avgörande faktorer för hur tatueringen läker. Att tänka på är att tatueringar också blir gamla och om några år kanske den inte ser likadan ut.
          </p>
        </Panel>
        <Panel header="Är det möjligt att få bedövning?" key="6">
          <p>Det är inte rekommenderat att använda bedövning innan tatuering.</p>
        </Panel>
        <Panel header="Är det normalt att tatueringen flagnar?" key="7">
          <p>Det är vanligt att tatueringen flagnar, fjällar och är torr - det är en naturlig process och del av läkningen.</p>
        </Panel>
        <Panel header="Avbokning" key="3">
          <p>Collapse Content</p>
        </Panel>
        <Panel header="Presentkort" key="4">
          <p>Collapse Content</p>
        </Panel>
      </Collapse>
        </div>
      </div>
    );
  };
  
  export default FaqPage;