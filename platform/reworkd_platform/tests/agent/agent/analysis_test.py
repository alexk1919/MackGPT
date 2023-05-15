import pytest
from pydantic import ValidationError

from reworkd_platform.web.api.agent.analysis import get_default_analysis, Analysis
from reworkd_platform.web.api.agent.tools.tools import get_default_tool, get_tool_name


def test_analysis_model() -> None:
    valid_tool_name = get_tool_name(get_default_tool())
    analysis = Analysis(action=valid_tool_name, arg="test argument")
    assert analysis.action == valid_tool_name
    assert analysis.arg == "test argument"


def test_analysis_model_invalid_tool() -> None:
    with pytest.raises(ValidationError):
        Analysis(action="invalid tool name", arg="test argument")


def test_get_default_analysis() -> None:
    default_analysis = get_default_analysis()
    assert isinstance(default_analysis, Analysis)
    assert default_analysis.action == "reason"
    assert default_analysis.arg == "Analyze errored out"
