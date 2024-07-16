import { createRef } from "react";

import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen } from "@testing-library/react";

import customRender from "@/__test__/render";

import Button from "@/components/Button/Button";

import { Theme } from "@/styles/Theme";

describe("Button Components", () => {
  it("Button is Defined", () => {
    expect(Button).toBeDefined();
  });

  afterEach(cleanup);

  describe("Button children test", () => {
    it("has string children", () => {
      customRender(<Button>text</Button>);

      expect(screen.getByText("text")).toBeInTheDocument();
    });

    it("has heading children", () => {
      customRender(
        <Button>
          <h1>heading</h1>
        </Button>
      );

      expect(screen.getByRole("heading")).toBeInTheDocument();
    });
  });

  describe("onClick test", () => {
    it("active onClick", () => {
      const onClickMocking = vi.fn();

      customRender(<Button onClick={onClickMocking}>test</Button>);

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(onClickMocking).toBeCalledTimes(1);
    });
  });

  describe("ref test", () => {
    it("ref connect button element", () => {
      const ref = createRef<HTMLButtonElement>();

      customRender(<Button ref={ref}>test</Button>);

      const button = screen.getByRole("button");

      expect(ref.current).toBe(button);
    });
  });

  describe("button style test", () => {
    describe("button size test", () => {
      it("size is medium", () => {
        customRender(<Button size="medium">test</Button>);

        expect(screen.getByText("test")).toHaveStyle({ width: "310px" });
      });

      it("size is large", () => {
        customRender(<Button size="large">test</Button>);

        expect(screen.getByRole("button")).toHaveStyle({ width: "331px" });
      });

      it("size is xLarge", () => {
        customRender(<Button size="xLarge">test</Button>);

        expect(screen.getByRole("button")).toHaveStyle({ width: "412px" });
      });
    });
  });

  describe("button variant test", () => {
    it("variant is default", () => {
      customRender(<Button>test</Button>);

      expect(screen.getByRole("button")).toHaveStyle({
        backgroundColor: Theme.color.brand_primary,
      });
    });

    it("variant is disabled", () => {
      customRender(<Button variant="disabled">test</Button>);

      expect(screen.getByRole("button")).toHaveStyle({
        backgroundColor: Theme.color.disabled_text,
      });
    });

    it("variant is outline", () => {
      customRender(<Button variant="outline">test</Button>);

      expect(screen.getByRole("button")).toHaveStyle({
        border: `1px solid ${Theme.color.border}`,
      });
    });

    it("variant is white", () => {
      customRender(<Button variant="white">test</Button>);

      expect(screen.getByRole("button")).toHaveStyle({
        backgroundColor: Theme.color.white,
        color: Theme.color.brand_primary,
      });
    });

    it("variant is danger", () => {
      customRender(<Button variant="danger">test</Button>);

      expect(screen.getByRole("button")).toHaveStyle({
        backgroundColor: Theme.color.btn_danger,
      });
    });
  });
});
