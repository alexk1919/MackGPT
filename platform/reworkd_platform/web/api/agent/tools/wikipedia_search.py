from langchain import WikipediaAPIWrapper

from reworkd_platform.web.api.agent.model_settings import ModelSettings
from reworkd_platform.web.api.agent.tools.tool import Tool
from reworkd_platform.web.api.agent.tools.utils import summarize


class Wikipedia(Tool):
    description = (
        "Search Wikipedia for information about historical people, companies, events, "
        "places or research. This should be used over search for broad overviews of "
        "specific nouns.\n The argument should be a simple query of just the noun."
    )
    public_description = "Search Wikipedia for historical information."

    def __init__(self, model_settings: ModelSettings):
        super().__init__(model_settings)
        self.wikipedia = WikipediaAPIWrapper()

    async def call(self, goal: str, task: str, input_str: str) -> str:
        # TODO: Make the below async
        wikipedia_search = self.wikipedia.run(input_str)
        return await summarize(self.model_settings, goal, task, [wikipedia_search])
