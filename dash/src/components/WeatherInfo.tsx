import { WeatherData } from "@/types/state.type";

import TemperatureComplication from "./complications/Temperature";
import HumidityComplication from "./complications/Humidity";
import WindSpeedComplication from "./complications/WindSpeed";
import RainComplication from "./complications/Rain";

type Props = {
	weather: WeatherData | undefined;
};

export default function DataWeatherInfo({ weather }: Props) {
	return (
		<div className="flex gap-2">
			{weather ? (
				<>
					<TemperatureComplication value={Math.round(parseFloat(weather.trackTemp))} label="TRC" />
					<TemperatureComplication value={Math.round(parseFloat(weather.airTemp))} label="AIR" />
					<HumidityComplication value={parseInt(weather.humidity)} />
					<RainComplication rain={!!weather.rainfall} />
					<WindSpeedComplication speed={parseInt(weather.windSpeed)} directionDeg={parseInt(weather.windDirection)} />
				</>
			) : (
				<>
					<Loading />
					<Loading />
					<Loading />
					<Loading />
					<Loading />
				</>
			)}
		</div>
	);
}

function Loading() {
	return <div className="h-[55px] w-[55px] animate-pulse rounded-full bg-gray-700" />;
}
