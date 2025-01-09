(()=>{var Y=`
	*, :after, :before {
		line-height: normal;
		box-sizing: border-box;
	}

	.draggable-window {
		display: inline-block;
		pointer-events: all;
	}

	.drag-logic {
		z-index: 501;
		top: calc(-170px + 38vh);
		left: 110px;
		transform: translate(468px, 148px);
		visibility: visible
	}

	.position-absolute {
		position: absolute !important;
	}

	.card {
		font-family: "Ubuntu Leet",sans-serif;
		font-size: 13px;
		background-color: #e9e9e1;
		filter: drop-shadow(4px 4px 4px rgba(0,0,0,.4117647059));
		border-radius: 8px;
		border: 1px solid;
		border-bottom: 2px solid #000;
		box-shadow: inset 0 0 0 2px #fff;
		color: #000;
		box-sizing: border-box;
		padding-bottom: 7px;
		resize: both;
	}

	.card-header {
		min-height: 32px;
		max-height: 32px;
		background: #1e7295;
		border: 2px solid #408caf;
		border-bottom: 1px solid #000;
		border-radius: 6px 6px 0 0;
	}

	.gap-2 {
		grid-gap: .5rem;
		gap: .5rem;
	}

	.justify-content-center {
		justify-content: center;
	}

	.align-items-center {
		align-items: center;
	}

	.container-fluid {
		width: 100%;
		padding-right: 8px;
		padding-left: 8px;
		margin-right: auto;
		margin-left: auto;
	}

	.w-100 {
		width: 100%;
	}

	.card-header-text {
		color: #fff;
		font-size: 13px;
		font-weight: 700;
	}

	.handitem-menu {
		width: 490px;
		height: 340px;
	}

	.flex-column {
		flex-direction: column;
	}

	.position-relative {
		position: relative;
	}

	.d-flex {
		display: flex;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	.grid-container {
		overflow: auto;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
		column-gap: 0.5rem;
		row-gap: 0.5rem;
		padding: 0.5rem;
		align-items: center;
	}

	.img-wrapper {
		height: 40px;
		border-radius: 0.25rem;
		background-position: 50%;
		background-repeat: no-repeat;
		background-color: #cdd3d9;
		cursor: pointer;
	}

	.handitem {
		
	}
	
	.menu {
		height: 34px;
		color: #000!important;
		display: flex;
		padding: 0 7px 0 16px;
		box-sizing: border-box;
		border-bottom: 1px solid #000;
		background-color: #fff;
	}

	.close-icon {
		cursor: pointer;
		width: 19px;
		height: 20px;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAADWSURBVDhPY2RAgP9QmhwANgdm2P97ruZQJulAafdJEMUIMgxu0P1vP8A0KUCRiwNMgwxkArOAgByDQABZH9wwagCshjkduQDG2AA+ObwuQ9eEyxAYwGrYPhsDKAthALJByPLIAKfLsBkIArgMAgG83kTXiM8gEICns833H0NEkEDe7adQFgJMUpWGshDAV1EWNZ2hA2SDkA3AZgEMYDUMm0HEGIg3zNC9hM2LyABvmBELCIYZOQBuGMh0cgCyPrA3QQwqlGeIwhFKUwLAhSMMUFhsMzAAANWvTiFN+9RiAAAAAElFTkSuQmCC);
		position: relative;
		float: right;
		margin: 4px;
		opacity: 1;
	}
	
	.close-icon:hover {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAADLSURBVDhPY2RAgP9QmhwANgdm2H8ggDJJB4yMELNAJNygp52NYJoUIF1eD6ZBBsINAxn0buNqsAQpQMg/FGwgyDAmqBhVAFbDdI9dgWNkgEscBgi6DKYRlwHIgChvEmMQCGA17LKVDpSFHeCSx+kyXBrwWYRi2P7X7+EYl9dA4sjqkAFWl+XdfgplYQe45ImKgEmq0lAWfkDQMJhBxBiI1TCQRhhGBrjEYYAobxILqF9qgDgwA8kB0PIMUThCaUoA1EgIoMRAoDkMDAAX11biMThZcwAAAABJRU5ErkJggg==);
	}

	.end-0 {
		right: 0;
	}

	::-webkit-scrollbar {
		width: 17px;
	}

	::-webkit-scrollbar-thumb {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAHCAIAAABhgDErAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGlWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDMtMjNUMDI6MDQ6MjEtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDMtMjNUMDI6MDQ6MjEtMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAzLTIzVDAyOjA0OjIxLTA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdmZmNiZGE4LWI1MjYtNGJiMy1iOGViLWQzNmVmZmNkMGMwYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjkxYjdlOGRlLThiZjktMDc0Yy04ZGQwLWUyYThiYjBhMGU1ZCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjU4Y2NmMGE5LWFkNDYtNDQyYi1hZmY0LWE3MGE3YzkxMThkYyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NThjY2YwYTktYWQ0Ni00NDJiLWFmZjQtYTcwYTdjOTExOGRjIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTIzVDAyOjA0OjIxLTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2ZmY2JkYTgtYjUyNi00YmIzLWI4ZWItZDM2ZWZmY2QwYzBjIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTIzVDAyOjA0OjIxLTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmViMDAwNDU1LTcyNWQtNGE0Ni04NGZkLTZmNmZlOGRlZmFiNTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqO0keAAAAAVSURBVBgZYwgmHTAA8X9SwKgesB4A4dYpN8vAwjsAAAAASUVORK5CYII=),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAICAIAAACQ1oP+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGlWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDMtMjNUMDI6MDQ6NDItMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDMtMjNUMDI6MDQ6NDItMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAzLTIzVDAyOjA0OjQyLTA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAwY2QyYzkzLWIyYTYtNGI4OS1iYTY5LTk3NDMxNTA5NTI4ZCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRkMjQzOTUyLWJmODAtNDg0NS04MTBhLTk2ZmVmNmFmZGIzNyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmYxODhmNjM3LTE2NDQtNGU2OC1hNTQ0LWVlZDY5ZjI0YjA3ZCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjE4OGY2MzctMTY0NC00ZTY4LWE1NDQtZWVkNjlmMjRiMDdkIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTIzVDAyOjA0OjQyLTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDBjZDJjOTMtYjJhNi00Yjg5LWJhNjktOTc0MzE1MDk1MjhkIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTIzVDAyOjA0OjQyLTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmViMDAwNDU1LTcyNWQtNGE0Ni04NGZkLTZmNmZlOGRlZmFiNTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq4agZsAAAAgSURBVBiVYwgODv5PCgCqZxjVA9ZzhhQA1cNACgCqBwDKyEBuNEguXQAAAABJRU5ErkJggg==),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAKCAIAAADdHiL1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGlWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDMtMjNUMDI6MDM6NTctMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDMtMjNUMDI6MDM6NTctMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAzLTIzVDAyOjAzOjU3LTA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4YmZhYzY3LWIwNGYtNDYwNi1hZjc2LWU1OTRmYTRmY2JjZSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjA3ZWRmNTkxLTE5NTctY2M0NC1hYzI5LWRkMWU5NTM0ZjBkNyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmU0NjcyZGRjLTQ4NDgtNGVmZC05MDM4LWNmYzk1NTM3ZmM0ZiIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTQ2NzJkZGMtNDg0OC00ZWZkLTkwMzgtY2ZjOTU1MzdmYzRmIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTIzVDAyOjAzOjU3LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDhiZmFjNjctYjA0Zi00NjA2LWFmNzYtZTU5NGZhNGZjYmNlIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTIzVDAyOjAzOjU3LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmViMDAwNDU1LTcyNWQtNGE0Ni04NGZkLTZmNmZlOGRlZmFiNTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlLoZ6wAAAAkSURBVCjPYwgODv6PBHZs346JkBUA1TOg6SEIsOgZtWdw2QMARgO2XQWbHcsAAAAASUVORK5CYII=);
	background-repeat: no-repeat,no-repeat,repeat-y;
	background-position: 0 0,bottom,0 7px;
	}
	
	::-webkit-scrollbar-track {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAABCAYAAAA4u0VhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDMtMjNUMDE6NDktMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDMtMjNUMDE6NDktMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAzLTIzVDAxOjQ5LTA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlhZWEyODU3LWQ1YzQtNDA3OC1iNzA2LTc1YmEyZTFjMzg2YiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmYzZDA4M2E2LWVlNjYtMDc0NS1iYjdjLWFmMjM4MzRhNmU2OCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmMzYTJkZDZlLTk0MDAtNDAwZi04MjYzLWJlNzljNzMzOTcwYyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzNhMmRkNmUtOTQwMC00MDBmLTgyNjMtYmU3OWM3MzM5NzBjIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTIzVDAxOjQ5LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWFlYTI4NTctZDVjNC00MDc4LWI3MDYtNzViYTJlMWMzODZiIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTIzVDAxOjQ5LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5e5Cm8AAAAGUlEQVQIW2MICAiYuW/fvpnXr18nC4P0AwCp1DGKUplnIgAAAABJRU5ErkJggg==);
	}
`;var u=["d-flex","overflow-hidden","position-relative","flex-column","card","handitem-menu"],G=["position-absolute","draggable-window"],h="z-index: 401; top: calc(-170px + 38vh); left: 110px; transform: translate(393px, 130px); visibility: visible;",M=["d-flex","position-relative","flex-column","gap-2","align-items-center","justify-content-center","container-fluid","card-header"],g=["d-flex","w-100","align-items-center","justify-content-center"],s=["card-header-text"],D=["position-absolute","end-0","close-icon"],W=["grid-container"];var E=new CSSStyleSheet;E.replaceSync(Y);var j=E;function T(){let e=document.querySelector("#root");new MutationObserver(S).observe(e,{subtree:!0,childList:!0})}function S(e,A){e.forEach(t=>{let c=t.addedNodes.item(0),d=t.type==="childList"&&c?.className==="nitro-room-chatinput-component",a=t.type==="childList"&&c?.className==="nitro-hotel-view";if(d){p();let n=document.querySelector("div:has(> div.icon-inventory)");U(n)}if(a){let n=L();p(),n.status&&n.element.remove()}})}function L(){let A=`div:has(> img[src="${chrome.runtime.getURL("/resources/images/menu-icon.png")}"])`,t=document.querySelector(A);return t?{status:!0,element:t}:{status:!1,element:null}}function y(){return!!N.querySelector("#handitem-menu")}function O(){y()?p():x()}function p(){let e=N.querySelector("#handitem-menu");e&&e.remove()}function U(e){if(!L().status){let t=document.createElement("div"),i=document.createElement("img");t.classList.add(...MENU_ITEM_CLASSES),i.src=chrome.runtime.getURL("/resources/images/menu-icon.png"),t.appendChild(i),t.addEventListener("click",O),e.appendChild(t)}}function x(){let e=document.createElement("div");e.classList.add(...G),e.setAttribute("style",h),e.setAttribute("id","handitem-menu");let A=document.createElement("div");A.classList.add(...u);let t=document.createElement("div");t.classList.add(...M);let i=document.createElement("div");i.classList.add(...g);let c=document.createElement("span");c.textContent="Handitems",c.classList.add(...s);let d=document.createElement("div");d.classList.add(...D);let a=document.createElement("div"),n=R();i.appendChild(c),i.appendChild(d),t.appendChild(i),a.classList.add(...W),a.append(...n),A.appendChild(t),A.appendChild(a),e.appendChild(A),N.appendChild(e);function Z({movementX:o,movementY:I}){let m=window.getComputedStyle(e),b=parseInt(m.left),l=parseInt(m.top);e.style.left=`${b+o}px`,e.style.top=`${l+I}px`}function R(){let o=document.querySelector("input.chat-input"),I=document.querySelector("div.chatinput-container"),m=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set,b=[];return HANDITEMS.forEach(l=>{let r=document.createElement("div"),w=chrome.runtime.getURL(l.imgPath);r.setAttribute("style",`background-image: url(${w})`),r.classList.add(...IMG_WRAPPER),r.addEventListener("click",()=>{let z=new Event("input",{bubbles:!0}),v=new KeyboardEvent("keydown",{key:"Enter",code:"Enter",keyCode:"13",bubbles:!0,cancelable:!0});m.call(o,l.code),I.setAttribute("data-value",l.code),o.dispatchEvent(z),o.dispatchEvent(v),m.call(o,""),I.setAttribute("data-value","")}),b.push(r)}),b}e.addEventListener("mousedown",()=>{e.addEventListener("mousemove",Z)}),e.addEventListener("mouseup",()=>{e.removeEventListener("mousemove",Z)}),d.addEventListener("click",p)}function B(){let A=document.querySelector("#draggable-windows-container").parentNode,t=document.createElement("div");t.setAttribute("id","draggable-windows-sr"),A.appendChild(t);let i=t.attachShadow({mode:"open"});return i.adoptedStyleSheets=[j],i}var N=B();T();})();
