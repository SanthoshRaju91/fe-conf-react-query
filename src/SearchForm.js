import { useState } from "react";
import { Form, Button, Input } from "reactjs-ui-components";

export default function SearchForm({ onSubmit }) {
  const [urlInput, setUrlInput] = useState("");
  const [nodeInput, setNodeInput] = useState(100);
  const [error, setError] = useState({
    urlInput: false,
    nodeInput: false,
  });

  function handleInputUrlChange(e) {
    setUrlInput(e.target.value);
  }

  function handleNodeValuechange(e) {
    setNodeInput(e.target.value);
  }

  function urlInputError() {
    setError({
      ...error,
      urlInput: true,
    });
  }

  function resetForm() {
    setError({
      nodeInput: false,
      urlInput: false,
    });
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    resetForm();

    if (!urlInput) {
      urlInputError();
      return;
    }

    if (!isValidImageUrl(urlInput)) {
      urlInputError();
      return;
    }

    if (parseInt(nodeInput) < 0 || parseInt(nodeInput) > 500) {
      setError({
        ...error,
        nodeInput: true,
      });
      return;
    }

    onSubmit(urlInput, nodeInput);
  }

  function isValidImageUrl(imageUrl) {
    return /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*\.(?:jpg|png))(?:\?([^#]*))?(?:#(.*))?/i.test(
      imageUrl
    );
  }

  return (
    <div className="SearchForm banner-gradient">
      <div className="Form w-11/12 mx-auto py-8">
        <Form onSubmit={handleSearchSubmit}>
          <div className="flex space-x-10">
            <div className="w-1/2">
              <Input
                className="pl-2"
                label="Enter Product Image Url"
                required
                onChange={handleInputUrlChange}
                value={urlInput}
                error={error.urlInput}
                placeholder="Product Image Url"
                message="JPEG / PNG format supported. GIF file is not supported"
              />
            </div>
            <div className="w-1/5">
              <Input
                type="number"
                className="pl-2"
                label="Enter No. of Results"
                required
                value={nodeInput}
                error={error.nodeInput}
                onChange={handleNodeValuechange}
                message="No. of search results to retrieve"
              />
            </div>
          </div>

          <div className="mt-8">
            <Button kind="positive" className="shadow rounded" icon="MdSearch">
              Search
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
