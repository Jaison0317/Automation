package testing;
import Page.WebPage;
import net.bytebuddy.asm.Advice;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;
import java.io.IOException;
import java.util.concurrent.TimeUnit;


public class Consultar extends WebPage {

    WebDriver driver = new ChromeDriver();
    By btnactividades = locator_btn_Actividades;
    By btnBuscar = locator_buscar_button;
    By inputDatos = locator_entradaDatos;
    By actividadesPage = getlocator_actividadesPage;
    By actividades2Page2 = getLocator_actividadesPage2;
    By ubicacion = locatorUbicacion;
    By filtros = locator_filtros;
    By filtrar = locator_filtrar;
    By IrPaquete = locator_irPaquete;
    By campoDestino = locator_Destino;
    By campoOrigen = locator_Desde;
    By fechaDesde = locator_fecha_desde;
    By fechaHasta = locator_fecha_hasta;

    @BeforeEach
    public void abrirNavegador() {
        WebDriverManager.chromedriver().setup();
        driver.manage().window().maximize();
        driver.get("https://www.despegar.com.ar/");
    }

    @Test
    public void irActividades() {
        if (driver.findElement(btnactividades).isDisplayed()) {
            driver.findElement(btnactividades).click();
        }
        if (driver.findElement(inputDatos).isDisplayed()) {
            driver.findElement(inputDatos).click();
            driver.findElement(inputDatos).sendKeys("Barcelona, Cataluña, España");
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            driver.findElement(ubicacion).isDisplayed();
            driver.findElement(ubicacion).click();
            driver.findElement(btnBuscar).click();
        }
    }

    @Test
    public void validarAvtividades()  {
        irActividades();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        if (driver.findElement(actividadesPage).isDisplayed()) {
            driver.getTitle();
            if (driver.findElement(actividades2Page2).isDisplayed()) {
                driver.getTitle();
                driver.findElement(filtros).isDisplayed();
                driver.findElement(filtrar).isDisplayed();
                driver.findElement(filtrar).click();
            }
        }
    }

    @Test
    public void validarPaquetes() {
        driver.findElement(IrPaquete).isDisplayed();
        driver.findElement(IrPaquete).click();
        driver.findElement(campoOrigen).sendKeys("Buenos Aires, Argentina");
        driver.findElement(campoDestino).sendKeys("Roma");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.findElement(fechaDesde).isSelected();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.findElement(fechaDesde).click();
        driver.findElement(fechaHasta).getLocation();
        driver.get("https://www.despegar.com.ar/trip/accommodations/results/PC7fa657166214484a80eb8c03b271c84f27457969?searchParams=RkgvQ0lUXzk4Mi9DSVRfNjQ1NS8yMDIyLTAzLTIyLzIwMjItMDMtMjkvQ0lUXzY0NTUvMjAyMi0wMy0yMi8yMDIyLTAzLTI5LzJ8SDI6SCxGMTpGLFhTOlhT&flow=FH&tripItem=H2&stepNum=0&from=PSB&from=PSB&searchId=dc66d764-aa39-41b2-a131-e9afbe1cfe4b&nw=true");
        driver.manage().timeouts().implicitlyWait(1, TimeUnit.MINUTES);

    }

}
