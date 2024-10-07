document.addEventListener("DOMContentLoaded", function () {
  const api = "https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php";
  const languageSelect = document.getElementById("language-select");
  const mtrLines = {
    KTL: {
      text: { EN: "Kwun Tong Line", TC: "觀塘線" },
      color: "#7ed957",
      sta: [
        { code: "WHA", name: { EN: "Whampoa", TC: "黃埔" } },
        { code: "HOM", name: { EN: "Ho Man Tin", TC: "何文田" } },
        { code: "YMT", name: { EN: "Yau Ma Tei", TC: "油麻地" } },
        { code: "MOK", name: { EN: "Mong Kok", TC: "旺角" } },
        { code: "PRE", name: { EN: "Prince Edward", TC: "太子" } },
        { code: "SKM", name: { EN: "Shek Kip Mei", TC: "石硤尾" } },
        { code: "KOT", name: { EN: "Kowloon Tong", TC: "九龍塘" } },
        { code: "LOF", name: { EN: "Lok Fu", TC: "樂富" } },
        { code: "WTS", name: { EN: "Wong Tai Sin", TC: "黃大仙" } },
        { code: "DIH", name: { EN: "Diamond Hill", TC: "鑽石山" } },
        { code: "CHH", name: { EN: "Choi Hung", TC: "彩虹" } },
        { code: "KOB", name: { EN: "Kowloon Bay", TC: "九龍灣" } },
        { code: "NTK", name: { EN: "Ngau Tau Kok", TC: "牛頭角" } },
        { code: "KWT", name: { EN: "Kwun Tong", TC: "觀塘" } },
        { code: "LAT", name: { EN: "Lam Tin", TC: "藍田" } },
        { code: "YAT", name: { EN: "Yau Tong", TC: "油塘" } },
        { code: "TIK", name: { EN: "Tiu Keng Leng", TC: "調景嶺" } },
      ],
      up: ["WHA"],
      down: ["TIK"],
    },
    ISL: {
      text: { EN: "Island Line", TC: "港島線" },
      color: "#004aad",
      sta: [
        { code: "KET", name: { EN: "Kennedy Town", TC: "堅尼地城" } },
        { code: "HKU", name: { EN: "HKU", TC: "香港大學" } },
        { code: "SYP", name: { EN: "Sai Ying Pun", TC: "西營盤" } },
        { code: "SHW", name: { EN: "Sheung Wan", TC: "上環" } },
        { code: "CEN", name: { EN: "Central", TC: "中環" } },
        { code: "ADM", name: { EN: "Admiralty", TC: "金鐘" } },
        { code: "WAC", name: { EN: "Wan Chai", TC: "灣仔" } },
        { code: "CAB", name: { EN: "Causeway Bay", TC: "銅鑼灣" } },
        { code: "TIH", name: { EN: "Tin Hau", TC: "天后" } },
        { code: "FOH", name: { EN: "Fortress Hill", TC: "鰂魚涌" } },
        { code: "NOP", name: { EN: "North Point", TC: "北角" } },
        { code: "QUB", name: { EN: "Quarry Bay", TC: "柴灣" } },
        { code: "TAK", name: { EN: "Tai Koo", TC: "太古" } },
        { code: "SWH", name: { EN: "Sai Wan Ho", TC: "西灣河" } },
        { code: "SKW", name: { EN: "Shau Kei Wan", TC: "筲箕灣" } },
        { code: "HFC", name: { EN: "Heng Fa Chuen", TC: "杏花邨" } },
        { code: "CHW", name: { EN: "Chai Wan", TC: "柴灣" } },
      ],
      up: ["CHW"],
      down: ["KET"],
    },
    TWL: {
      text: { EN: "Tsuen Wan Line", TC: "荃灣線" },
      color: "#ff3131",
      sta: [
        { code: "CEN", name: { EN: "Central", TC: "中環" } },
        { code: "ADM", name: { EN: "Admiralty", TC: "金鐘" } },
        { code: "TST", name: { EN: "Tsim Sha Tsui", TC: "尖沙咀" } },
        { code: "JOR", name: { EN: "Jordan", TC: "佐敦" } },
        { code: "YMT", name: { EN: "Yau Ma Tei", TC: "油麻地" } },
        { code: "MOK", name: { EN: "Mong Kok", TC: "旺角" } },
        { code: "PRE", name: { EN: "Price Edward", TC: "太子" } },
        { code: "SSP", name: { EN: "Sham Shui Po", TC: "深水埗" } },
        { code: "CSW", name: { EN: "Cheung Sha Wan", TC: "長沙灣" } },
        { code: "LCK", name: { EN: "Lai Chi Kok", TC: "荔枝角" } },
        { code: "MEF", name: { EN: "Mei Foo", TC: "美孚" } },
        { code: "LAK", name: { EN: "Lai King", TC: "賴街" } },
        { code: "KWF", name: { EN: "Kwai Fong", TC: "葵芳" } },
        { code: "KWH", name: { EN: "Kwai Hing", TC: "葵興" } },
        { code: "TWH", name: { EN: "Tai Wo Hau", TC: "大窩口" } },
        { code: "TSW", name: { EN: "Tsuen Wan", TC: "荃灣" } },
      ],
      up: ["TSW"],
      down: ["CEN"],
    },
    SIL: {
      text: { EN: "South Island Line", TC: "南港島線" },
      color: "#cbcd09",
      sta: [
        { code: "ADM", name: { EN: "Admiralty", TC: "金鐘" } },
        { code: "OCP", name: { EN: "Ocean Park", TC: "海洋公園" } },
        { code: "WCH", name: { EN: "Wong Chuk Hang", TC: "黃竹坑" } },
        { code: "LET", name: { EN: "Lei Tung", TC: "列堤頓山" } },
        { code: "SOH", name: { EN: "South Horizons", TC: "南灣" } },
      ],
      up: ["SOH"],
      down: ["ADM"],
    },
    TCL: {
      text: { EN: "Tung Chung Line", TC: "東涌線" },
      color: "#f6943d",
      sta: [
        { code: "HOK", name: { EN: "Hong Kong", TC: "香港" } },
        { code: "KOW", name: { EN: "Kowloon", TC: "九龍" } },
        { code: "OLY", name: { EN: "Olympic", TC: "奧運" } },
        { code: "NAC", name: { EN: "Nam Cheong", TC: "南昌" } },
        { code: "LAK", name: { EN: "Lai King", TC: "賴街" } },
        { code: "TSY", name: { EN: "Tsing Yi", TC: "青衣" } },
        { code: "SUN", name: { EN: "Sunny Bay", TC: "青衣" } },
        { code: "TUC", name: { EN: "Tung Chung", TC: "東涌" } },
      ],
      up: ["TUC"],
      down: ["HOK"],
    },
    EAL: {
      text: { EN: "East Rail Line", TC: "東鐵線" },
      color: "#5ce1e6",
      sta: [
        { code: "ADM", name: { EN: "Admiralty", TC: "金鐘" } },
        { code: "EXC", name: { EN: "Exhibition Centre", TC: "會展" } },
        { code: "HUH", name: { EN: "Hung Hom", TC: "旺角東" } },
        { code: "MKK", name: { EN: "Mong Kok East", TC: "旺角東" } },
        { code: "KOT", name: { EN: "Kowloon Tong", TC: "九龍塘" } },
        { code: "TAW", name: { EN: "Tai Wai", TC: "太和" } },
        { code: "SHT", name: { EN: "Sha Tin", TC: "沙田" } },
        { code: "FOT", name: { EN: "Fo Tan", TC: "粉嶺" } },
        { code: "RAC", name: { EN: "Racecourse", TC: "馬場" } },
        { code: "UNI", name: { EN: "University", TC: "大學" } },
        { code: "TAP", name: { EN: "Tai Po Market", TC: "大埔墟" } },
        { code: "TWO", name: { EN: "Tai Wo", TC: "大埔" } },
        { code: "FAN", name: { EN: "Fanling", TC: "粉嶺" } },
        { code: "SHS", name: { EN: "Sheung Shui", TC: "上水" } },
        { code: "LOW", name: { EN: "Lo Wu", TC: "羅湖" } },
        { code: "LMC", name: { EN: "Lok Ma Chau", TC: "落馬洲" } },
      ],
      up: ["LMC"],
      down: ["ADM"],
    },
    TML: {
      text: { EN: "Tuen Ma Line", TC: "屯馬線" },
      color: "#8d6019",
      sta: [
        { code: "WKS", name: { EN: "Wu Kai Sha", TC: "烏溪沙" } },
        { code: "MOS", name: { EN: "Ma On Shan", TC: "馬鞍山" } },
        { code: "HEO", name: { EN: "Heng On", TC: "恆安" } },
        { code: "TSH", name: { EN: "Tai Shui Hang", TC: "大水坑" } },
        { code: "SHM", name: { EN: "Shek Mun", TC: "石門" } },
        { code: "CIO", name: { EN: "City One", TC: "第一城" } },
        { code: "STW", name: { EN: "Sha Tin Wai", TC: "沙田圍" } },
        { code: "CKT", name: { EN: "Che Kung Temple", TC: "車公廟" } },
        { code: "TAW", name: { EN: "Tai Wai", TC: "大圍" } },
        { code: "HIK", name: { EN: "Hin Keng", TC: "顯徑" } },
        { code: "DIH", name: { EN: "Diamond Hill", TC: "鑽石山" } },
        { code: "KAT", name: { EN: "Kai Tak", TC: "啟德" } },
        { code: "SUW", name: { EN: "Sung Wong Toi", TC: "宋皇臺" } },
        { code: "TKW", name: { EN: "To Kwa Wan", TC: "土瓜灣" } },
        { code: "HOM", name: { EN: "Ho Man Tin", TC: "何文田" } },
        { code: "HUH", name: { EN: "Hung Hom", TC: "紅磡" } },
        { code: "ETS", name: { EN: "East Tsim Sha Tsui", TC: "尖東" } },
        { code: "AUS", name: { EN: "Austin", TC: "柯士甸" } },
        { code: "NAC", name: { EN: "Nam Cheong", TC: "南昌" } },
        { code: "MEF", name: { EN: "Mei Foo", TC: "美孚" } },
        { code: "TWW", name: { EN: "Tsuen Wan West", TC: "荃灣西" } },
        { code: "KSR", name: { EN: "Kam Sheung Road", TC: "錦上路" } },
        { code: "YUL", name: { EN: "Yuen Long", TC: "元朗" } },
        { code: "LOP", name: { EN: "Long Ping", TC: "朗屏" } },
        { code: "TIS", name: { EN: "Tin Shui Wai", TC: "天水圍" } },
        { code: "SIH", name: { EN: "Siu Hong", TC: "兆康" } },
        { code: "TUM", name: { EN: "Tuen Mun", TC: "屯門" } },
      ],
      up: ["TUM"],
      down: ["WKS"],
    },
    AEL: {
      text: { EN: "Airport Express", TC: "機場快線" },
      color: "#3d9ea0",
      sta: [
        { code: "HOK", name: { EN: "Hong Kong", TC: "香港" } },
        { code: "KOW", name: { EN: "Kowloon", TC: "九龍" } },
        { code: "TSY", name: { EN: "Tsing Yi", TC: "青衣" } },
        { code: "AIR", name: { EN: "Airport", TC: "機場" } },
        { code: "AWE", name: { EN: "AsiaWorld Expo", TC: "博覽館" } },
      ],
      up: ["AWE"],
      down: ["HOK"],
    },
    TKL: {
      text: { EN: "Tseung Kwan O Line", TC: "將軍澳線" },
      color: "#8d45ab",
      sta: [
        { code: "NOP", name: { EN: "North Point", TC: "北角" } },
        { code: "QUB", name: { EN: "Quarry Bay", TC: "鰂魚涌" } },
        { code: "YAT", name: { EN: "Yau Tong", TC: "油塘" } },
        { code: "TIK", name: { EN: "Tiu Keng Leng", TC: "調景嶺" } },
        { code: "TKO", name: { EN: "Tseung Kwan O", TC: "將軍澳" } },
        { code: "LHP", name: { EN: "LOHAS Park", TC: "康城" } },
        { code: "HAH", name: { EN: "Hang Hau", TC: "坑口" } },
        { code: "POA", name: { EN: "Po Lam", TC: "寶琳" } },
      ],
      up: ["POA"],
      down: ["NOP"],
    },
  };

  /*  fetch API */
  renderLines();

  function renderLines() {
    const area = document.querySelector(".lines");
    const language = languageSelect.value;
    area.innerHTML = ""; // Clear existing lines

    for (const lineCode in mtrLines) {
      const line = mtrLines[lineCode];
      const elem = cloneFromTemplate("template-line");
      elem.querySelector("span").textContent =
        line.text[language] || line.text["EN"];
      elem.style.setProperty("--color", line.color);
      elem.style.borderColor = line.color;
      elem.dataset.lineCode = lineCode;
      elem.addEventListener("click", selectLine);

      area.appendChild(elem);
    }
  }

  async function selectLine(event) {
    const lineElem = event.currentTarget;
    const lineCode = lineElem.dataset.lineCode;
    const line = mtrLines[lineCode];
    const language = languageSelect.value;

    console.log(`Selecting line: ${lineCode}, Language: ${language}`);

    document.querySelector(".line.active")?.classList.remove("active");
    lineElem.classList.add("active");

    const trainsContainer = document.querySelector(".trains-container");
    trainsContainer.innerHTML = "";
    document.querySelector(".loading").classList.remove("hide");

    try {
      console.log(`Fetching data for line: ${lineCode}`);
      const data = await fetchApiData(lineCode, language);
      console.log("Fetched data:", data);
      if (data && Object.keys(data).length > 0) {
        renderTrains(data, lineCode, line, language);
      } else {
        console.error(`No data available for line ${lineCode}`);
        trainsContainer.innerHTML = "<p>No data available for this line.</p>";
      }
    } catch (error) {
      console.error("Error in selectLine:", error);
      trainsContainer.innerHTML =
        "<p>Error loading data. Please try again.</p>";
    } finally {
      document.querySelector(".loading").classList.add("hide");
    }
  }
  function renderTrains(data, lineCode, line, language) {
    console.log(`Rendering trains for line: ${lineCode}`);
    const trainsContainer = document.querySelector(".trains-container");
    trainsContainer.innerHTML = "";
    const directions = ["up", "down"];
    if (!data || Object.keys(data).length === 0) {
      trainsContainer.innerHTML =
        "<p>No train data available for this line.</p>";
      return;
    }

    directions.forEach((direction) => {
      const directionElem = cloneFromTemplate("template-trains-direction");
      const directionTitle =
        language === "TC"
          ? direction === "up"
            ? "往"
            : "往"
          : direction === "up"
          ? "To "
          : "To ";
      const destinationStation = line[direction][0];
      const destinationName = getStationName(
        lineCode,
        destinationStation,
        language
      );

      directionElem.querySelector(
        ".title"
      ).textContent = `${directionTitle}${destinationName}方向`;

      const trainsElem = directionElem.querySelector(".trains");

      line.sta.forEach((station) => {
        const stationData = data[`${lineCode}-${station.code}`];
        if (
          stationData &&
          stationData[direction.toUpperCase()] &&
          stationData[direction.toUpperCase()].length > 0
        ) {
          const trainInfo = stationData[direction.toUpperCase()][0];
          const trainElem = renderTrain(
            trainInfo,
            station,
            lineCode,
            line.color,
            language
          );
          trainsElem.appendChild(trainElem);
        }
      });

      trainsContainer.appendChild(directionElem);
    });

    document.querySelector(".last-updated-time").textContent = `${
      language === "TC" ? "最後更新時間" : "Last updated"
    }: ${data.curr_time || new Date().toLocaleString()}`;
  }

  function renderTrain(trainInfo, station, lineCode, color, language) {
    const elem = cloneFromTemplate("template-train");
    elem.style.setProperty("--color", color);

    elem.querySelector(".name").textContent = station.name[language];
    elem.querySelector(".destination span").textContent = getStationName(
      lineCode,
      trainInfo.dest,
      language
    );
    elem.querySelector(".platform span").textContent = trainInfo.plat;
    elem.querySelector(".time span").textContent = formatTime(trainInfo.time);

    return elem;
  }

  function formatTime(timeString) {
    const time = new Date(timeString);
    return `${time.getHours()}:${String(time.getMinutes()).padStart(2, "0")}`;
  }

  function getStationName(lineCode, stationCode, language) {
    const line = mtrLines[lineCode];
    if (!line) return stationCode;

    const station = line.sta.find((s) => s.code === stationCode);
    return station ? station.name[language] || station.name.EN : stationCode;
  }

  function cloneFromTemplate(templateId) {
    const template = document.getElementById(templateId);
    return template.content.cloneNode(true).children[0];
  }

  async function fetchApiData(line, language) {
    try {
      const allStationData = {};
      for (const station of mtrLines[line].sta) {
        const endpoint = `${api}?line=${line}&sta=${station.code}&lang=${language}`;
        console.log(
          `Fetching data for station: ${station.code} on line: ${line}`
        );
        console.log(`Endpoint: ${endpoint}`);

        const response = await fetch(endpoint);
        if (!response.ok) {
          console.error(
            `HTTP error for station ${station.code}: ${response.status}`
          );
          continue;
        }

        const responseData = await response.json();
        console.log(`Response for station ${station.code}:`, responseData);

        if (responseData.status === 0) {
          console.warn(
            `API returned status 0 for station ${station.code}: ${responseData.message}`
          );
          continue;
        }

        if (responseData.data && responseData.data[`${line}-${station.code}`]) {
          allStationData[`${line}-${station.code}`] =
            responseData.data[`${line}-${station.code}`];
        } else {
          console.warn(`No data available for station ${station.code}`);
        }
      }

      if (Object.keys(allStationData).length === 0) {
        console.error(`No data available for any station on line ${line}`);
      }

      return allStationData;
    } catch (err) {
      console.error("Error fetching data:", err.message);
      return null;
    }
  }

  languageSelect.addEventListener("change", function () {
    renderLines();
    const activeLineElem = document.querySelector(".line.active");
    if (activeLineElem) {
      selectLine({ currentTarget: activeLineElem });
    }
  });
});
